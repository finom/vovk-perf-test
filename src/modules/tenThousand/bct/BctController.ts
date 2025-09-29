import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcts")
export default class BctController {
  @operation({
    summary: "Get Bcts",
  })
  @get()
  static getBcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bct",
  })
  @post("{id}")
  static createBct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
