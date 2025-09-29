import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exks")
export default class ExkController {
  @operation({
    summary: "Get Exks",
  })
  @get()
  static getExks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exk",
  })
  @post("{id}")
  static createExk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
