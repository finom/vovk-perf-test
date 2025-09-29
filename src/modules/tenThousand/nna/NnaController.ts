import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnas")
export default class NnaController {
  @operation({
    summary: "Get Nnas",
  })
  @get()
  static getNnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nna",
  })
  @post("{id}")
  static createNna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
