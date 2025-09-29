import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtds")
export default class GtdController {
  @operation({
    summary: "Get Gtds",
  })
  @get()
  static getGtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtd",
  })
  @post("{id}")
  static createGtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
