import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwps")
export default class LwpController {
  @operation({
    summary: "Get Lwps",
  })
  @get()
  static getLwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwp",
  })
  @post("{id}")
  static createLwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
