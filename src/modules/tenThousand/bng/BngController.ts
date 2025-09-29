import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bngs")
export default class BngController {
  @operation({
    summary: "Get Bngs",
  })
  @get()
  static getBngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bng",
  })
  @post("{id}")
  static createBng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
