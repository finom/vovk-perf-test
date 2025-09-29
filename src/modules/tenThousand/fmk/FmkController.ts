import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmks")
export default class FmkController {
  @operation({
    summary: "Get Fmks",
  })
  @get()
  static getFmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmk",
  })
  @post("{id}")
  static createFmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
