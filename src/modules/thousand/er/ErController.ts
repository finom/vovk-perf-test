import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ers")
export default class ErController {
  @operation({
    summary: "Get Ers",
  })
  @get()
  static getErs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Er",
  })
  @post("{id}")
  static createEr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
