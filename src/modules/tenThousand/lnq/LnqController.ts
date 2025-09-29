import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnqs")
export default class LnqController {
  @operation({
    summary: "Get Lnqs",
  })
  @get()
  static getLnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnq",
  })
  @post("{id}")
  static createLnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
