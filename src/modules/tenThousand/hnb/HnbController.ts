import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnbs")
export default class HnbController {
  @operation({
    summary: "Get Hnbs",
  })
  @get()
  static getHnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnb",
  })
  @post("{id}")
  static createHnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
