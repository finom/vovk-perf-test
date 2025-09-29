import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byus")
export default class ByuController {
  @operation({
    summary: "Get Byus",
  })
  @get()
  static getByus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byu",
  })
  @post("{id}")
  static createByu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
