import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpzs")
export default class GpzController {
  @operation({
    summary: "Get Gpzs",
  })
  @get()
  static getGpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpz",
  })
  @post("{id}")
  static createGpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
