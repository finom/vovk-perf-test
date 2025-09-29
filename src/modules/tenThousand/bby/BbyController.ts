import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbies")
export default class BbyController {
  @operation({
    summary: "Get Bbies",
  })
  @get()
  static getBbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bby",
  })
  @post("{id}")
  static createBby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
