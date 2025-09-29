import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvxes")
export default class GvxController {
  @operation({
    summary: "Get Gvxes",
  })
  @get()
  static getGvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvx",
  })
  @post("{id}")
  static createGvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
