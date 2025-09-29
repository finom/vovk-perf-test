import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avbs")
export default class AvbController {
  @operation({
    summary: "Get Avbs",
  })
  @get()
  static getAvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avb",
  })
  @post("{id}")
  static createAvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
