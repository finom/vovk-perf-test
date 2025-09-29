import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iavs")
export default class IavController {
  @operation({
    summary: "Get Iavs",
  })
  @get()
  static getIavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iav",
  })
  @post("{id}")
  static createIav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
