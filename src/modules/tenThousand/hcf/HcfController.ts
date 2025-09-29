import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcfs")
export default class HcfController {
  @operation({
    summary: "Get Hcfs",
  })
  @get()
  static getHcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcf",
  })
  @post("{id}")
  static createHcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
