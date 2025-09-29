import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndus")
export default class NduController {
  @operation({
    summary: "Get Ndus",
  })
  @get()
  static getNdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndu",
  })
  @post("{id}")
  static createNdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
