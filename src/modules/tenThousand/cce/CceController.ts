import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cces")
export default class CceController {
  @operation({
    summary: "Get Cces",
  })
  @get()
  static getCces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cce",
  })
  @post("{id}")
  static createCce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
