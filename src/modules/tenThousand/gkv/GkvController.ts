import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkvs")
export default class GkvController {
  @operation({
    summary: "Get Gkvs",
  })
  @get()
  static getGkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkv",
  })
  @post("{id}")
  static createGkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
