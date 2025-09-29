import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlds")
export default class MldController {
  @operation({
    summary: "Get Mlds",
  })
  @get()
  static getMlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mld",
  })
  @post("{id}")
  static createMld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
