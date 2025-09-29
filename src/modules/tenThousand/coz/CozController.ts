import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cozs")
export default class CozController {
  @operation({
    summary: "Get Cozs",
  })
  @get()
  static getCozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coz",
  })
  @post("{id}")
  static createCoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
