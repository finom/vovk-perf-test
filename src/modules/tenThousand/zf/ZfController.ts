import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zfs")
export default class ZfController {
  @operation({
    summary: "Get Zfs",
  })
  @get()
  static getZfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zf",
  })
  @post("{id}")
  static createZf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
