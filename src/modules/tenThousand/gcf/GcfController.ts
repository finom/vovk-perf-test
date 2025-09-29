import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcfs")
export default class GcfController {
  @operation({
    summary: "Get Gcfs",
  })
  @get()
  static getGcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcf",
  })
  @post("{id}")
  static createGcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
