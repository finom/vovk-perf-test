import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gles")
export default class GleController {
  @operation({
    summary: "Get Gles",
  })
  @get()
  static getGles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gle",
  })
  @post("{id}")
  static createGle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
