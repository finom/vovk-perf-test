import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwms")
export default class HwmController {
  @operation({
    summary: "Get Hwms",
  })
  @get()
  static getHwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwm",
  })
  @post("{id}")
  static createHwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
