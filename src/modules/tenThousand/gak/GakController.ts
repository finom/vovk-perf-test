import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaks")
export default class GakController {
  @operation({
    summary: "Get Gaks",
  })
  @get()
  static getGaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gak",
  })
  @post("{id}")
  static createGak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
