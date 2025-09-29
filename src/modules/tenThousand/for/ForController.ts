import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fors")
export default class ForController {
  @operation({
    summary: "Get Fors",
  })
  @get()
  static getFors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create For",
  })
  @post("{id}")
  static createFor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
