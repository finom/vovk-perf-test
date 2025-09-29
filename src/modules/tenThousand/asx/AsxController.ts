import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asxes")
export default class AsxController {
  @operation({
    summary: "Get Asxes",
  })
  @get()
  static getAsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asx",
  })
  @post("{id}")
  static createAsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
