import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhms")
export default class HhmController {
  @operation({
    summary: "Get Hhms",
  })
  @get()
  static getHhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhm",
  })
  @post("{id}")
  static createHhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
