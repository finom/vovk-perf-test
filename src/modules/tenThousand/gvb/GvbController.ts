import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvbs")
export default class GvbController {
  @operation({
    summary: "Get Gvbs",
  })
  @get()
  static getGvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvb",
  })
  @post("{id}")
  static createGvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
