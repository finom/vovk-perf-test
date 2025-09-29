import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffies")
export default class FfyController {
  @operation({
    summary: "Get Ffies",
  })
  @get()
  static getFfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffy",
  })
  @post("{id}")
  static createFfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
