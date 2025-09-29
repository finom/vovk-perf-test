import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbrs")
export default class FbrController {
  @operation({
    summary: "Get Fbrs",
  })
  @get()
  static getFbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbr",
  })
  @post("{id}")
  static createFbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
