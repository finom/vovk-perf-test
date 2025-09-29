import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzos")
export default class GzoController {
  @operation({
    summary: "Get Gzos",
  })
  @get()
  static getGzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzo",
  })
  @post("{id}")
  static createGzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
