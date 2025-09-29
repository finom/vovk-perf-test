import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkvs")
export default class LkvController {
  @operation({
    summary: "Get Lkvs",
  })
  @get()
  static getLkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkv",
  })
  @post("{id}")
  static createLkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
