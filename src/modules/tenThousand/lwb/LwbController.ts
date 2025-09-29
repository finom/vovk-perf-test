import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwbs")
export default class LwbController {
  @operation({
    summary: "Get Lwbs",
  })
  @get()
  static getLwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwb",
  })
  @post("{id}")
  static createLwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
