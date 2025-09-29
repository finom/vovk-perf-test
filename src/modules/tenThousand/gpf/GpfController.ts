import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpfs")
export default class GpfController {
  @operation({
    summary: "Get Gpfs",
  })
  @get()
  static getGpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpf",
  })
  @post("{id}")
  static createGpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
