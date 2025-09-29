import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwds")
export default class MwdController {
  @operation({
    summary: "Get Mwds",
  })
  @get()
  static getMwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwd",
  })
  @post("{id}")
  static createMwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
