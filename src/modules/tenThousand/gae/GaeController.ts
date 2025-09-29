import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaes")
export default class GaeController {
  @operation({
    summary: "Get Gaes",
  })
  @get()
  static getGaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gae",
  })
  @post("{id}")
  static createGae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
