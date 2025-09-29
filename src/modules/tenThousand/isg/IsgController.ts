import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isgs")
export default class IsgController {
  @operation({
    summary: "Get Isgs",
  })
  @get()
  static getIsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isg",
  })
  @post("{id}")
  static createIsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
