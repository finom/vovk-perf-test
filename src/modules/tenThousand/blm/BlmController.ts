import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blms")
export default class BlmController {
  @operation({
    summary: "Get Blms",
  })
  @get()
  static getBlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blm",
  })
  @post("{id}")
  static createBlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
