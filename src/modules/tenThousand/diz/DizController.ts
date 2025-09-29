import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dizs")
export default class DizController {
  @operation({
    summary: "Get Dizs",
  })
  @get()
  static getDizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Diz",
  })
  @post("{id}")
  static createDiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
