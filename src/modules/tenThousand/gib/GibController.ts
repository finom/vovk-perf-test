import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gibs")
export default class GibController {
  @operation({
    summary: "Get Gibs",
  })
  @get()
  static getGibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gib",
  })
  @post("{id}")
  static createGib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
