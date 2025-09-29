import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrzs")
export default class MrzController {
  @operation({
    summary: "Get Mrzs",
  })
  @get()
  static getMrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrz",
  })
  @post("{id}")
  static createMrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
