import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcis")
export default class BciController {
  @operation({
    summary: "Get Bcis",
  })
  @get()
  static getBcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bci",
  })
  @post("{id}")
  static createBci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
