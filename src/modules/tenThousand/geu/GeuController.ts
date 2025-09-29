import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geus")
export default class GeuController {
  @operation({
    summary: "Get Geus",
  })
  @get()
  static getGeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geu",
  })
  @post("{id}")
  static createGeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
