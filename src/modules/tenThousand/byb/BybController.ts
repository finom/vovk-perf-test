import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bybs")
export default class BybController {
  @operation({
    summary: "Get Bybs",
  })
  @get()
  static getBybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byb",
  })
  @post("{id}")
  static createByb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
