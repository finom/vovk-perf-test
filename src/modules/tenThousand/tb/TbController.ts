import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tbs")
export default class TbController {
  @operation({
    summary: "Get Tbs",
  })
  @get()
  static getTbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tb",
  })
  @post("{id}")
  static createTb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
