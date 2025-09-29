import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eizs")
export default class EizController {
  @operation({
    summary: "Get Eizs",
  })
  @get()
  static getEizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiz",
  })
  @post("{id}")
  static createEiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
