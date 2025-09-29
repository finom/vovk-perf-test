import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sms")
export default class SmController {
  @operation({
    summary: "Get Sms",
  })
  @get()
  static getSms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sm",
  })
  @post("{id}")
  static createSm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
