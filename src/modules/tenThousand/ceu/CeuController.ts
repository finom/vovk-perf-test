import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceus")
export default class CeuController {
  @operation({
    summary: "Get Ceus",
  })
  @get()
  static getCeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceu",
  })
  @post("{id}")
  static createCeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
