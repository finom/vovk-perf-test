import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avs")
export default class AvsController {
  @operation({
    summary: "Get Avs",
  })
  @get()
  static getAvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avs",
  })
  @post("{id}")
  static createAvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
