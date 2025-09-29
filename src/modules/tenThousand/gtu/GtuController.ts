import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtus")
export default class GtuController {
  @operation({
    summary: "Get Gtus",
  })
  @get()
  static getGtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtu",
  })
  @post("{id}")
  static createGtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
