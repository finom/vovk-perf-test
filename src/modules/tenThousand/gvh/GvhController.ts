import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvhs")
export default class GvhController {
  @operation({
    summary: "Get Gvhs",
  })
  @get()
  static getGvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvh",
  })
  @post("{id}")
  static createGvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
