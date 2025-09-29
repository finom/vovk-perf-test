import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnas")
export default class BnaController {
  @operation({
    summary: "Get Bnas",
  })
  @get()
  static getBnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bna",
  })
  @post("{id}")
  static createBna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
