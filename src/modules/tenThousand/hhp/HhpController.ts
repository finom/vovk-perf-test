import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhps")
export default class HhpController {
  @operation({
    summary: "Get Hhps",
  })
  @get()
  static getHhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhp",
  })
  @post("{id}")
  static createHhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
