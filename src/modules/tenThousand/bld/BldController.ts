import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blds")
export default class BldController {
  @operation({
    summary: "Get Blds",
  })
  @get()
  static getBlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bld",
  })
  @post("{id}")
  static createBld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
