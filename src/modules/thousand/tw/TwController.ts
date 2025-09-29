import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tws")
export default class TwController {
  @operation({
    summary: "Get Tws",
  })
  @get()
  static getTws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tw",
  })
  @post("{id}")
  static createTw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
