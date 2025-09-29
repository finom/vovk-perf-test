import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lems")
export default class LemController {
  @operation({
    summary: "Get Lems",
  })
  @get()
  static getLems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lem",
  })
  @post("{id}")
  static createLem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
