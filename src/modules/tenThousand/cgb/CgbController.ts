import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgbs")
export default class CgbController {
  @operation({
    summary: "Get Cgbs",
  })
  @get()
  static getCgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgb",
  })
  @post("{id}")
  static createCgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
