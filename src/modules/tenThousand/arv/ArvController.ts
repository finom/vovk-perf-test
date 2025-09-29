import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arvs")
export default class ArvController {
  @operation({
    summary: "Get Arvs",
  })
  @get()
  static getArvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arv",
  })
  @post("{id}")
  static createArv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
