import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bycs")
export default class BycController {
  @operation({
    summary: "Get Bycs",
  })
  @get()
  static getBycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byc",
  })
  @post("{id}")
  static createByc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
