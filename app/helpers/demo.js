export const demoVariables =
`$white: #fff;
$black: #000;
$grey: #999;
$main: #2cb968;`;

export const demoButtons =
`.button {
  display: inline-block;
  background: $main;
  color: $white;
  padding: 8px 16px;

  &--disabled {
    color: $black;
    background: $grey;

    &:hover {
      background: color($grey a(15%));
    }
  }
}`;
