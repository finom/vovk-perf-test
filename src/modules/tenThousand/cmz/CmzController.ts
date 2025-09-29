import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmzs")
export default class CmzController {
  @operation({
    summary: "Get Cmzs",
  })
  @get()
  static getCmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmz",
  })
  @post("{id}")
  static createCmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
