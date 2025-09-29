import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfies")
export default class LfyController {
  @operation({
    summary: "Get Lfies",
  })
  @get()
  static getLfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfy",
  })
  @post("{id}")
  static createLfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
