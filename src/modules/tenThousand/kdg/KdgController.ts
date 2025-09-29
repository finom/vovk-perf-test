import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdgs")
export default class KdgController {
  @operation({
    summary: "Get Kdgs",
  })
  @get()
  static getKdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdg",
  })
  @post("{id}")
  static createKdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
