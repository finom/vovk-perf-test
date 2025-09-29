import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnvs")
export default class MnvController {
  @operation({
    summary: "Get Mnvs",
  })
  @get()
  static getMnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnv",
  })
  @post("{id}")
  static createMnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
