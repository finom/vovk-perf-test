import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glis")
export default class GliController {
  @operation({
    summary: "Get Glis",
  })
  @get()
  static getGlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gli",
  })
  @post("{id}")
  static createGli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
