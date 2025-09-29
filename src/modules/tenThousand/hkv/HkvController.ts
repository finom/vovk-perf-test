import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkvs")
export default class HkvController {
  @operation({
    summary: "Get Hkvs",
  })
  @get()
  static getHkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkv",
  })
  @post("{id}")
  static createHkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
