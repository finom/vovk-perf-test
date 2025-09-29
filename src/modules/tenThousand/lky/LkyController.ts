import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkies")
export default class LkyController {
  @operation({
    summary: "Get Lkies",
  })
  @get()
  static getLkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lky",
  })
  @post("{id}")
  static createLky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
