import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjjs")
export default class GjjController {
  @operation({
    summary: "Get Gjjs",
  })
  @get()
  static getGjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjj",
  })
  @post("{id}")
  static createGjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
