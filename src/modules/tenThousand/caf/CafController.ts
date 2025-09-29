import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cafs")
export default class CafController {
  @operation({
    summary: "Get Cafs",
  })
  @get()
  static getCafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caf",
  })
  @post("{id}")
  static createCaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
