import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihds")
export default class IhdController {
  @operation({
    summary: "Get Ihds",
  })
  @get()
  static getIhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihd",
  })
  @post("{id}")
  static createIhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
