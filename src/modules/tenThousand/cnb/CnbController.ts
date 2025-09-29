import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnbs")
export default class CnbController {
  @operation({
    summary: "Get Cnbs",
  })
  @get()
  static getCnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnb",
  })
  @post("{id}")
  static createCnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
