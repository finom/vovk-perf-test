import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mids")
export default class MidController {
  @operation({
    summary: "Get Mids",
  })
  @get()
  static getMids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mid",
  })
  @post("{id}")
  static createMid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
