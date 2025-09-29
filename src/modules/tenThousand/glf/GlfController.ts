import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glves")
export default class GlfController {
  @operation({
    summary: "Get Glves",
  })
  @get()
  static getGlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glf",
  })
  @post("{id}")
  static createGlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
