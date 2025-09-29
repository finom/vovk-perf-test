import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwts")
export default class LwtController {
  @operation({
    summary: "Get Lwts",
  })
  @get()
  static getLwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwt",
  })
  @post("{id}")
  static createLwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
