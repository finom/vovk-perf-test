import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aurs")
export default class AurController {
  @operation({
    summary: "Get Aurs",
  })
  @get()
  static getAurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aur",
  })
  @post("{id}")
  static createAur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
