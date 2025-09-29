import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chus")
export default class ChuController {
  @operation({
    summary: "Get Chus",
  })
  @get()
  static getChus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chu",
  })
  @post("{id}")
  static createChu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
