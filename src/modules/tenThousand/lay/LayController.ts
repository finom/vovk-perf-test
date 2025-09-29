import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lays")
export default class LayController {
  @operation({
    summary: "Get Lays",
  })
  @get()
  static getLays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lay",
  })
  @post("{id}")
  static createLay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
