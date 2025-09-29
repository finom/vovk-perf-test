import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adcs")
export default class AdcController {
  @operation({
    summary: "Get Adcs",
  })
  @get()
  static getAdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adc",
  })
  @post("{id}")
  static createAdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
