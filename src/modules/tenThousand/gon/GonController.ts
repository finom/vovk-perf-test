import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gons")
export default class GonController {
  @operation({
    summary: "Get Gons",
  })
  @get()
  static getGons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gon",
  })
  @post("{id}")
  static createGon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
