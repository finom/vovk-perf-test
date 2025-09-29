import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmus")
export default class BmuController {
  @operation({
    summary: "Get Bmus",
  })
  @get()
  static getBmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmu",
  })
  @post("{id}")
  static createBmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
