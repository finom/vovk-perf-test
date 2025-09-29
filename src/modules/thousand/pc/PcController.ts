import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pcs")
export default class PcController {
  @operation({
    summary: "Get Pcs",
  })
  @get()
  static getPcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pc",
  })
  @post("{id}")
  static createPc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
