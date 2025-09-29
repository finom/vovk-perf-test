import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkvs")
export default class DkvController {
  @operation({
    summary: "Get Dkvs",
  })
  @get()
  static getDkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkv",
  })
  @post("{id}")
  static createDkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
