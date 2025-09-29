import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gavs")
export default class GavController {
  @operation({
    summary: "Get Gavs",
  })
  @get()
  static getGavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gav",
  })
  @post("{id}")
  static createGav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
