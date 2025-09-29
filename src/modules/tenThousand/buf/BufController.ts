import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bufs")
export default class BufController {
  @operation({
    summary: "Get Bufs",
  })
  @get()
  static getBufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buf",
  })
  @post("{id}")
  static createBuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
