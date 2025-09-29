import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvfs")
export default class GvfController {
  @operation({
    summary: "Get Gvfs",
  })
  @get()
  static getGvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvf",
  })
  @post("{id}")
  static createGvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
