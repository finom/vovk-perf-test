import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icfs")
export default class IcfController {
  @operation({
    summary: "Get Icfs",
  })
  @get()
  static getIcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icf",
  })
  @post("{id}")
  static createIcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
