import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ities")
export default class ItyController {
  @operation({
    summary: "Get Ities",
  })
  @get()
  static getIties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ity",
  })
  @post("{id}")
  static createIty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
