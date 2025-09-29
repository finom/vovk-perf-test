import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfhs")
export default class CfhController {
  @operation({
    summary: "Get Cfhs",
  })
  @get()
  static getCfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfh",
  })
  @post("{id}")
  static createCfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
