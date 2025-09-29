import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ors")
export default class OrController {
  @operation({
    summary: "Get Ors",
  })
  @get()
  static getOrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Or",
  })
  @post("{id}")
  static createOr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
