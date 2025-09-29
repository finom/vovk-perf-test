import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ners")
export default class NerController {
  @operation({
    summary: "Get Ners",
  })
  @get()
  static getNers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ner",
  })
  @post("{id}")
  static createNer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
