import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjks")
export default class GjkController {
  @operation({
    summary: "Get Gjks",
  })
  @get()
  static getGjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjk",
  })
  @post("{id}")
  static createGjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
