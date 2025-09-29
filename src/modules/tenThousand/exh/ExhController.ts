import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exhs")
export default class ExhController {
  @operation({
    summary: "Get Exhs",
  })
  @get()
  static getExhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exh",
  })
  @post("{id}")
  static createExh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
