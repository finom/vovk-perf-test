import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpxes")
export default class MpxController {
  @operation({
    summary: "Get Mpxes",
  })
  @get()
  static getMpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpx",
  })
  @post("{id}")
  static createMpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
