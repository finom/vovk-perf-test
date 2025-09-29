import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gczs")
export default class GczController {
  @operation({
    summary: "Get Gczs",
  })
  @get()
  static getGczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcz",
  })
  @post("{id}")
  static createGcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
