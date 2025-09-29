import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmls")
export default class KmlController {
  @operation({
    summary: "Get Kmls",
  })
  @get()
  static getKmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kml",
  })
  @post("{id}")
  static createKml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
