import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkvs")
export default class FkvController {
  @operation({
    summary: "Get Fkvs",
  })
  @get()
  static getFkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkv",
  })
  @post("{id}")
  static createFkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
