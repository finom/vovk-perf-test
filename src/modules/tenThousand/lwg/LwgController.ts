import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwgs")
export default class LwgController {
  @operation({
    summary: "Get Lwgs",
  })
  @get()
  static getLwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwg",
  })
  @post("{id}")
  static createLwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
