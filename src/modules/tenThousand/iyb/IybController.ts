import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iybs")
export default class IybController {
  @operation({
    summary: "Get Iybs",
  })
  @get()
  static getIybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyb",
  })
  @post("{id}")
  static createIyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
