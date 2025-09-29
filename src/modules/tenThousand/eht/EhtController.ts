import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehts")
export default class EhtController {
  @operation({
    summary: "Get Ehts",
  })
  @get()
  static getEhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eht",
  })
  @post("{id}")
  static createEht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
