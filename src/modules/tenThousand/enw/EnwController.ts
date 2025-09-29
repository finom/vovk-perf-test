import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enws")
export default class EnwController {
  @operation({
    summary: "Get Enws",
  })
  @get()
  static getEnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enw",
  })
  @post("{id}")
  static createEnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
