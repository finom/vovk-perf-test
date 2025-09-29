import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfms")
export default class DfmController {
  @operation({
    summary: "Get Dfms",
  })
  @get()
  static getDfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfm",
  })
  @post("{id}")
  static createDfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
