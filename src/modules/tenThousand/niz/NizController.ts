import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nizs")
export default class NizController {
  @operation({
    summary: "Get Nizs",
  })
  @get()
  static getNizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niz",
  })
  @post("{id}")
  static createNiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
