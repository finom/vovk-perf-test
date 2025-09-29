import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdcs")
export default class CdcController {
  @operation({
    summary: "Get Cdcs",
  })
  @get()
  static getCdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdc",
  })
  @post("{id}")
  static createCdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
