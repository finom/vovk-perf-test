import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtrs")
export default class GtrController {
  @operation({
    summary: "Get Gtrs",
  })
  @get()
  static getGtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtr",
  })
  @post("{id}")
  static createGtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
