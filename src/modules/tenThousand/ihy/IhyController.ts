import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihies")
export default class IhyController {
  @operation({
    summary: "Get Ihies",
  })
  @get()
  static getIhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihy",
  })
  @post("{id}")
  static createIhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
