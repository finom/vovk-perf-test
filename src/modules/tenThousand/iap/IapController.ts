import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaps")
export default class IapController {
  @operation({
    summary: "Get Iaps",
  })
  @get()
  static getIaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iap",
  })
  @post("{id}")
  static createIap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
