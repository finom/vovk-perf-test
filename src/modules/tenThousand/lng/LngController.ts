import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lngs")
export default class LngController {
  @operation({
    summary: "Get Lngs",
  })
  @get()
  static getLngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lng",
  })
  @post("{id}")
  static createLng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
