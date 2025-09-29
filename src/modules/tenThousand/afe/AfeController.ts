import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afes")
export default class AfeController {
  @operation({
    summary: "Get Afes",
  })
  @get()
  static getAfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afe",
  })
  @post("{id}")
  static createAfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
