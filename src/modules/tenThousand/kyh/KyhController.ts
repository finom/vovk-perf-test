import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyhs")
export default class KyhController {
  @operation({
    summary: "Get Kyhs",
  })
  @get()
  static getKyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyh",
  })
  @post("{id}")
  static createKyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
