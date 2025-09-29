import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkns")
export default class DknController {
  @operation({
    summary: "Get Dkns",
  })
  @get()
  static getDkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkn",
  })
  @post("{id}")
  static createDkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
