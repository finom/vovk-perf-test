import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mffs")
export default class MffController {
  @operation({
    summary: "Get Mffs",
  })
  @get()
  static getMffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mff",
  })
  @post("{id}")
  static createMff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
