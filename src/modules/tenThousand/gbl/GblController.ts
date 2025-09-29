import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbls")
export default class GblController {
  @operation({
    summary: "Get Gbls",
  })
  @get()
  static getGbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbl",
  })
  @post("{id}")
  static createGbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
