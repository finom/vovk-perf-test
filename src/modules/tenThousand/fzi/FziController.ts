import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzis")
export default class FziController {
  @operation({
    summary: "Get Fzis",
  })
  @get()
  static getFzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzi",
  })
  @post("{id}")
  static createFzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
