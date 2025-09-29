import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmcs")
export default class MmcController {
  @operation({
    summary: "Get Mmcs",
  })
  @get()
  static getMmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmc",
  })
  @post("{id}")
  static createMmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
