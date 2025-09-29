import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibms")
export default class IbmController {
  @operation({
    summary: "Get Ibms",
  })
  @get()
  static getIbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibm",
  })
  @post("{id}")
  static createIbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
