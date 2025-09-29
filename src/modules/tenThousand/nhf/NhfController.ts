import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhfs")
export default class NhfController {
  @operation({
    summary: "Get Nhfs",
  })
  @get()
  static getNhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhf",
  })
  @post("{id}")
  static createNhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
