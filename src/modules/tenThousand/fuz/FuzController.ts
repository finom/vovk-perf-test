import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuzs")
export default class FuzController {
  @operation({
    summary: "Get Fuzs",
  })
  @get()
  static getFuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuz",
  })
  @post("{id}")
  static createFuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
