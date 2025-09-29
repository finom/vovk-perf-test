import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acfs")
export default class AcfController {
  @operation({
    summary: "Get Acfs",
  })
  @get()
  static getAcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acf",
  })
  @post("{id}")
  static createAcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
