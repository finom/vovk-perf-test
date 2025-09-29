import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cufs")
export default class CufController {
  @operation({
    summary: "Get Cufs",
  })
  @get()
  static getCufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuf",
  })
  @post("{id}")
  static createCuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
