import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghns")
export default class GhnController {
  @operation({
    summary: "Get Ghns",
  })
  @get()
  static getGhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghn",
  })
  @post("{id}")
  static createGhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
