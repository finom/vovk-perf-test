import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nces")
export default class NceController {
  @operation({
    summary: "Get Nces",
  })
  @get()
  static getNces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nce",
  })
  @post("{id}")
  static createNce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
