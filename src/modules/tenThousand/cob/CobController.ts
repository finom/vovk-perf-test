import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cobs")
export default class CobController {
  @operation({
    summary: "Get Cobs",
  })
  @get()
  static getCobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cob",
  })
  @post("{id}")
  static createCob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
