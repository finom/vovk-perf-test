import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("trs")
export default class TrController {
  @operation({
    summary: "Get Trs",
  })
  @get()
  static getTrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tr",
  })
  @post("{id}")
  static createTr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
