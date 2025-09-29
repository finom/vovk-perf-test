import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfs")
export default class CfController {
  @operation({
    summary: "Get Cfs",
  })
  @get()
  static getCfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cf",
  })
  @post("{id}")
  static createCf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
