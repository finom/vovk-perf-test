import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvks")
export default class GvkController {
  @operation({
    summary: "Get Gvks",
  })
  @get()
  static getGvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvk",
  })
  @post("{id}")
  static createGvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
