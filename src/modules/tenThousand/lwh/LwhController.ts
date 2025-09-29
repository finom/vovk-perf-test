import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwhs")
export default class LwhController {
  @operation({
    summary: "Get Lwhs",
  })
  @get()
  static getLwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwh",
  })
  @post("{id}")
  static createLwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
