import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zies")
export default class ZyController {
  @operation({
    summary: "Get Zies",
  })
  @get()
  static getZies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zy",
  })
  @post("{id}")
  static createZy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
