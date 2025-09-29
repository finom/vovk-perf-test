import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnks")
export default class NnkController {
  @operation({
    summary: "Get Nnks",
  })
  @get()
  static getNnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnk",
  })
  @post("{id}")
  static createNnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
