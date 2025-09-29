import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgws")
export default class CgwController {
  @operation({
    summary: "Get Cgws",
  })
  @get()
  static getCgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgw",
  })
  @post("{id}")
  static createCgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
