import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byrs")
export default class ByrController {
  @operation({
    summary: "Get Byrs",
  })
  @get()
  static getByrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byr",
  })
  @post("{id}")
  static createByr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
