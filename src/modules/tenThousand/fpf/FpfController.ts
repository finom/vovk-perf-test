import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpfs")
export default class FpfController {
  @operation({
    summary: "Get Fpfs",
  })
  @get()
  static getFpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpf",
  })
  @post("{id}")
  static createFpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
