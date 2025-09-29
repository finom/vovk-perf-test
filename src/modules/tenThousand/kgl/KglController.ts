import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgls")
export default class KglController {
  @operation({
    summary: "Get Kgls",
  })
  @get()
  static getKgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgl",
  })
  @post("{id}")
  static createKgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
