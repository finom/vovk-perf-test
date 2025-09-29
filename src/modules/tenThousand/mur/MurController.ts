import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("murs")
export default class MurController {
  @operation({
    summary: "Get Murs",
  })
  @get()
  static getMurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mur",
  })
  @post("{id}")
  static createMur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
