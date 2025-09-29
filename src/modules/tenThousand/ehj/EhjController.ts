import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehjs")
export default class EhjController {
  @operation({
    summary: "Get Ehjs",
  })
  @get()
  static getEhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehj",
  })
  @post("{id}")
  static createEhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
