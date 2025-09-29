import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfws")
export default class CfwController {
  @operation({
    summary: "Get Cfws",
  })
  @get()
  static getCfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfw",
  })
  @post("{id}")
  static createCfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
