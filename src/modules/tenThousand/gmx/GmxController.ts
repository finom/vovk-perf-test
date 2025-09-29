import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmxes")
export default class GmxController {
  @operation({
    summary: "Get Gmxes",
  })
  @get()
  static getGmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmx",
  })
  @post("{id}")
  static createGmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
