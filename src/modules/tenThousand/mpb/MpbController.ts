import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpbs")
export default class MpbController {
  @operation({
    summary: "Get Mpbs",
  })
  @get()
  static getMpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpb",
  })
  @post("{id}")
  static createMpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
