import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqvs")
export default class HqvController {
  @operation({
    summary: "Get Hqvs",
  })
  @get()
  static getHqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqv",
  })
  @post("{id}")
  static createHqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
