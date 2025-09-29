import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyns")
export default class IynController {
  @operation({
    summary: "Get Iyns",
  })
  @get()
  static getIyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyn",
  })
  @post("{id}")
  static createIyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
