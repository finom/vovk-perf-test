import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfcs")
export default class CfcController {
  @operation({
    summary: "Get Cfcs",
  })
  @get()
  static getCfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfc",
  })
  @post("{id}")
  static createCfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
