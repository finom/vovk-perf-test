import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsks")
export default class BskController {
  @operation({
    summary: "Get Bsks",
  })
  @get()
  static getBsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsk",
  })
  @post("{id}")
  static createBsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
