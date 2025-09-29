import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbzs")
export default class CbzController {
  @operation({
    summary: "Get Cbzs",
  })
  @get()
  static getCbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbz",
  })
  @post("{id}")
  static createCbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
