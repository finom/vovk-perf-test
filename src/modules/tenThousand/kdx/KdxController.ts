import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdxes")
export default class KdxController {
  @operation({
    summary: "Get Kdxes",
  })
  @get()
  static getKdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdx",
  })
  @post("{id}")
  static createKdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
