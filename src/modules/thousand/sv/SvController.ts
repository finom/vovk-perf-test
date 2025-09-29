import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("svs")
export default class SvController {
  @operation({
    summary: "Get Svs",
  })
  @get()
  static getSvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sv",
  })
  @post("{id}")
  static createSv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
