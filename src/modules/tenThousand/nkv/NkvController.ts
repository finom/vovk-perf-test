import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkvs")
export default class NkvController {
  @operation({
    summary: "Get Nkvs",
  })
  @get()
  static getNkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkv",
  })
  @post("{id}")
  static createNkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
