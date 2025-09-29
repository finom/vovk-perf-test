import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nivs")
export default class NivController {
  @operation({
    summary: "Get Nivs",
  })
  @get()
  static getNivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niv",
  })
  @post("{id}")
  static createNiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
