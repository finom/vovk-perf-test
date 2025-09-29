import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwds")
export default class LwdController {
  @operation({
    summary: "Get Lwds",
  })
  @get()
  static getLwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwd",
  })
  @post("{id}")
  static createLwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
