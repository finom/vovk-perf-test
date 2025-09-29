import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afgs")
export default class AfgController {
  @operation({
    summary: "Get Afgs",
  })
  @get()
  static getAfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afg",
  })
  @post("{id}")
  static createAfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
