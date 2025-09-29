import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgzs")
export default class CgzController {
  @operation({
    summary: "Get Cgzs",
  })
  @get()
  static getCgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgz",
  })
  @post("{id}")
  static createCgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
