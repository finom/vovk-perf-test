import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cges")
export default class CgeController {
  @operation({
    summary: "Get Cges",
  })
  @get()
  static getCges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cge",
  })
  @post("{id}")
  static createCge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
