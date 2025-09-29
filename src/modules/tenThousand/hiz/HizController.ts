import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hizs")
export default class HizController {
  @operation({
    summary: "Get Hizs",
  })
  @get()
  static getHizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hiz",
  })
  @post("{id}")
  static createHiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
