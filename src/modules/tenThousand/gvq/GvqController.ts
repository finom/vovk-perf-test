import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvqs")
export default class GvqController {
  @operation({
    summary: "Get Gvqs",
  })
  @get()
  static getGvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvq",
  })
  @post("{id}")
  static createGvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
