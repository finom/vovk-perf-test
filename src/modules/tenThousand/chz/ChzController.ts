import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chzs")
export default class ChzController {
  @operation({
    summary: "Get Chzs",
  })
  @get()
  static getChzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chz",
  })
  @post("{id}")
  static createChz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
