import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gebs")
export default class GebController {
  @operation({
    summary: "Get Gebs",
  })
  @get()
  static getGebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geb",
  })
  @post("{id}")
  static createGeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
