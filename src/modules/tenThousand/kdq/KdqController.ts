import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdqs")
export default class KdqController {
  @operation({
    summary: "Get Kdqs",
  })
  @get()
  static getKdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdq",
  })
  @post("{id}")
  static createKdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
