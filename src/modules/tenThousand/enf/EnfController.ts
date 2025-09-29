import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enfs")
export default class EnfController {
  @operation({
    summary: "Get Enfs",
  })
  @get()
  static getEnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enf",
  })
  @post("{id}")
  static createEnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
