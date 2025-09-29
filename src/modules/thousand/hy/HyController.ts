import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hies")
export default class HyController {
  @operation({
    summary: "Get Hies",
  })
  @get()
  static getHies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hy",
  })
  @post("{id}")
  static createHy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
