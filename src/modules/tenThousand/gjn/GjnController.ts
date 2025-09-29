import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjns")
export default class GjnController {
  @operation({
    summary: "Get Gjns",
  })
  @get()
  static getGjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjn",
  })
  @post("{id}")
  static createGjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
