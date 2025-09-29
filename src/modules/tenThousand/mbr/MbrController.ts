import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbrs")
export default class MbrController {
  @operation({
    summary: "Get Mbrs",
  })
  @get()
  static getMbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbr",
  })
  @post("{id}")
  static createMbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
