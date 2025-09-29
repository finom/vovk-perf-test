import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjgs")
export default class HjgController {
  @operation({
    summary: "Get Hjgs",
  })
  @get()
  static getHjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjg",
  })
  @post("{id}")
  static createHjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
