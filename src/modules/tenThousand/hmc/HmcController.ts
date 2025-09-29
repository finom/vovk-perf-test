import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmcs")
export default class HmcController {
  @operation({
    summary: "Get Hmcs",
  })
  @get()
  static getHmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmc",
  })
  @post("{id}")
  static createHmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
