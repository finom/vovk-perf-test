import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnjs")
export default class CnjController {
  @operation({
    summary: "Get Cnjs",
  })
  @get()
  static getCnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnj",
  })
  @post("{id}")
  static createCnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
