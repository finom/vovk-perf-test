import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azfs")
export default class AzfController {
  @operation({
    summary: "Get Azfs",
  })
  @get()
  static getAzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azf",
  })
  @post("{id}")
  static createAzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
