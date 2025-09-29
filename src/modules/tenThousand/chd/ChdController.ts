import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chds")
export default class ChdController {
  @operation({
    summary: "Get Chds",
  })
  @get()
  static getChds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chd",
  })
  @post("{id}")
  static createChd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
