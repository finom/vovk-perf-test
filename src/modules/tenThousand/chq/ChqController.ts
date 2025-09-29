import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chqs")
export default class ChqController {
  @operation({
    summary: "Get Chqs",
  })
  @get()
  static getChqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chq",
  })
  @post("{id}")
  static createChq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
