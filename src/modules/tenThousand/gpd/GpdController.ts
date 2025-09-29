import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpds")
export default class GpdController {
  @operation({
    summary: "Get Gpds",
  })
  @get()
  static getGpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpd",
  })
  @post("{id}")
  static createGpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
