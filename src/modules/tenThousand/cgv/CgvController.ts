import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgvs")
export default class CgvController {
  @operation({
    summary: "Get Cgvs",
  })
  @get()
  static getCgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgv",
  })
  @post("{id}")
  static createCgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
