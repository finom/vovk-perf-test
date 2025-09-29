import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgies")
export default class KgyController {
  @operation({
    summary: "Get Kgies",
  })
  @get()
  static getKgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgy",
  })
  @post("{id}")
  static createKgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
