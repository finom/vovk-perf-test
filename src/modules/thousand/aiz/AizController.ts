import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aizs")
export default class AizController {
  @operation({
    summary: "Get Aizs",
  })
  @get()
  static getAizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aiz",
  })
  @post("{id}")
  static createAiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
