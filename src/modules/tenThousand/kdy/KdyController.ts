import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdies")
export default class KdyController {
  @operation({
    summary: "Get Kdies",
  })
  @get()
  static getKdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdy",
  })
  @post("{id}")
  static createKdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
