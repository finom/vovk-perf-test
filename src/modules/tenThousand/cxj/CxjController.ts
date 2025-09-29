import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxjs")
export default class CxjController {
  @operation({
    summary: "Get Cxjs",
  })
  @get()
  static getCxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxj",
  })
  @post("{id}")
  static createCxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
