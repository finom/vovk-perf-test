import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gljs")
export default class GljController {
  @operation({
    summary: "Get Gljs",
  })
  @get()
  static getGljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glj",
  })
  @post("{id}")
  static createGlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
