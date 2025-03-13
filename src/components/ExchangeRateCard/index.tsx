import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../../schema';
import { ExchangeIcon } from '../assets';
import InputController from '../Controller/InputController/InputController';
import SelectController from '../Controller/SelectController';
import {
  BoxResult,
  BoxTooltip,
  Card,
  Container,
  Content,
  MuiIconButton,
  MuiLink,
  ParagraphLarge,
  ParagraphSmall,
  TextMobile,
  TooltipInformative,
  TooltipSmallTextDesktop,
  TooltipText,
  Wrapper,
} from './styles';
import { formatNumber } from '../../utils/formatNumber';

const ExchangeRateCard = ({
  coins,
  rates,
  data,
  onSubmit,
  largeNames,
}: {
  coins: { value: string; name: string }[];
  rates: { [key: string]: number };
  data: FormValues;
  largeNames:{
    from: string;
    to: string;
  }
  onSubmit: (data: any) => void;
}) => {
  const { control, handleSubmit } = useFormContext();
  const { from, to, amount, date: lastUpdate } = data;

  const fromAmount = useMemo(() => rates[from], [rates, from]);
  const toAmount = useMemo(() => rates[to], [rates, to]);

  const conversionRate = useMemo(() => {
    return ((amount * toAmount) / fromAmount).toFixed(2);
  }, [amount, fromAmount, toAmount]);

  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Wrapper>
          <InputController
            control={control}
            name="amount"
            label="Amount"
            includeSymbol
            fullWidth
          />
          <SelectController
            control={control}
            name="from"
            label="From"
            placeholder='Select currency'
            options={coins}
          />
          <MuiIconButton type="submit">
            <ExchangeIcon />
          </MuiIconButton>
          <SelectController
            control={control}
            name="to"
            label="To"
            placeholder='Select currency'
            options={coins}
          />
        </Wrapper>
        <Content>
          <BoxResult>
            <ParagraphLarge>
              {`${fromAmount} ${largeNames.from}`} =<br />
              {`${toAmount} ${largeNames.to}`}
            </ParagraphLarge>
            <ParagraphSmall>{`${formatNumber(amount)} ${from} = ${formatNumber(Number(conversionRate)) ?? 0} ${to}`}</ParagraphSmall>
          </BoxResult>
          <BoxTooltip>
            <TooltipInformative>
              <TooltipText>
                We use the mid-market rate for our Converter. This is for
                informational purposes only. You won’t receive this rate when
                sending money.
              </TooltipText>
            </TooltipInformative>
            <TooltipSmallTextDesktop>
              <MuiLink
                href="https://www.xe.com/currency/eur-euro/"
                target="_blank"
              >
                {largeNames.from}
              </MuiLink>{' '}
              to{' '}
              <MuiLink
                href="https://www.xe.com/currency/eur-euro/"
                target="_blank"
              >
                {largeNames.to}
              </MuiLink>{' '}
              conversion - Last updated {lastUpdate}
            </TooltipSmallTextDesktop>
          </BoxTooltip>
        </Content>
      </Card>
      <TextMobile>
        <MuiLink href="https://www.xe.com/currency/eur-euro/" target="_blank">
          {largeNames.from}
        </MuiLink>{' '}
        to{' '}
        <MuiLink
          href="https://www.xe.com/currency/usd-us-dollar/"
          target="_blank"
        >
          {largeNames.to}
        </MuiLink>{' '}
        conversion - Last updated {lastUpdate}
      </TextMobile>
    </Container>
  );
};

export default ExchangeRateCard;
