import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwxes")
export default class LwxController {
  @operation({
    summary: "Get Lwxes",
  })
  @get()
  static getLwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwx",
  })
  @post("{id}")
  static createLwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
