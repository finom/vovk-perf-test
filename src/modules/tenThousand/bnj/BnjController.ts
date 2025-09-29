import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnjs")
export default class BnjController {
  @operation({
    summary: "Get Bnjs",
  })
  @get()
  static getBnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnj",
  })
  @post("{id}")
  static createBnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
