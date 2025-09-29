import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dozs")
export default class DozController {
  @operation({
    summary: "Get Dozs",
  })
  @get()
  static getDozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doz",
  })
  @post("{id}")
  static createDoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
