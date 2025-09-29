import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkvs")
export default class BkvController {
  @operation({
    summary: "Get Bkvs",
  })
  @get()
  static getBkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkv",
  })
  @post("{id}")
  static createBkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
