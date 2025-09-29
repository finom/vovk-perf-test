import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hois")
export default class HoiController {
  @operation({
    summary: "Get Hois",
  })
  @get()
  static getHois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoi",
  })
  @post("{id}")
  static createHoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
