import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vfs")
export default class VfController {
  @operation({
    summary: "Get Vfs",
  })
  @get()
  static getVfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vf",
  })
  @post("{id}")
  static createVf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
