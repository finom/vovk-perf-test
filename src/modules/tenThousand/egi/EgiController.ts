import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egis")
export default class EgiController {
  @operation({
    summary: "Get Egis",
  })
  @get()
  static getEgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egi",
  })
  @post("{id}")
  static createEgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
