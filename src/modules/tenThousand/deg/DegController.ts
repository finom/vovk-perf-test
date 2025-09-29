import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("degs")
export default class DegController {
  @operation({
    summary: "Get Degs",
  })
  @get()
  static getDegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deg",
  })
  @post("{id}")
  static createDeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
