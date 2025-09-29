import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnbs")
export default class BnbController {
  @operation({
    summary: "Get Bnbs",
  })
  @get()
  static getBnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnb",
  })
  @post("{id}")
  static createBnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
