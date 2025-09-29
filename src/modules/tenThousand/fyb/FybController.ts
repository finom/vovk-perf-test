import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fybs")
export default class FybController {
  @operation({
    summary: "Get Fybs",
  })
  @get()
  static getFybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyb",
  })
  @post("{id}")
  static createFyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
