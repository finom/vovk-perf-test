import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cags")
export default class CagController {
  @operation({
    summary: "Get Cags",
  })
  @get()
  static getCags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cag",
  })
  @post("{id}")
  static createCag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
