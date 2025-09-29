import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtfs")
export default class MtfController {
  @operation({
    summary: "Get Mtfs",
  })
  @get()
  static getMtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtf",
  })
  @post("{id}")
  static createMtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
