import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpjs")
export default class MpjController {
  @operation({
    summary: "Get Mpjs",
  })
  @get()
  static getMpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpj",
  })
  @post("{id}")
  static createMpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
