import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igis")
export default class IgiController {
  @operation({
    summary: "Get Igis",
  })
  @get()
  static getIgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igi",
  })
  @post("{id}")
  static createIgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
