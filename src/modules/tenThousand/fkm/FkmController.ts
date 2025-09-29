import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkms")
export default class FkmController {
  @operation({
    summary: "Get Fkms",
  })
  @get()
  static getFkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkm",
  })
  @post("{id}")
  static createFkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
