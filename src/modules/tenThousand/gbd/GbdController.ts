import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbds")
export default class GbdController {
  @operation({
    summary: "Get Gbds",
  })
  @get()
  static getGbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbd",
  })
  @post("{id}")
  static createGbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
