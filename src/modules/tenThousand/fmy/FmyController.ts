import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmies")
export default class FmyController {
  @operation({
    summary: "Get Fmies",
  })
  @get()
  static getFmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmy",
  })
  @post("{id}")
  static createFmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
