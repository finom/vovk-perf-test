import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdcs")
export default class FdcController {
  @operation({
    summary: "Get Fdcs",
  })
  @get()
  static getFdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdc",
  })
  @post("{id}")
  static createFdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
