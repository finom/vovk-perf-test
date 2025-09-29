import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwns")
export default class LwnController {
  @operation({
    summary: "Get Lwns",
  })
  @get()
  static getLwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwn",
  })
  @post("{id}")
  static createLwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
