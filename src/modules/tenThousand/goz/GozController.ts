import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gozs")
export default class GozController {
  @operation({
    summary: "Get Gozs",
  })
  @get()
  static getGozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goz",
  })
  @post("{id}")
  static createGoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
