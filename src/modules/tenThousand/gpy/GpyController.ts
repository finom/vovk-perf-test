import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpies")
export default class GpyController {
  @operation({
    summary: "Get Gpies",
  })
  @get()
  static getGpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpy",
  })
  @post("{id}")
  static createGpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
