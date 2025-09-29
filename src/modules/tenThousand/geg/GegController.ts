import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gegs")
export default class GegController {
  @operation({
    summary: "Get Gegs",
  })
  @get()
  static getGegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geg",
  })
  @post("{id}")
  static createGeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
