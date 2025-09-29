import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwies")
export default class LwyController {
  @operation({
    summary: "Get Lwies",
  })
  @get()
  static getLwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwy",
  })
  @post("{id}")
  static createLwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
