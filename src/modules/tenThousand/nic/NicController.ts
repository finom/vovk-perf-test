import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nics")
export default class NicController {
  @operation({
    summary: "Get Nics",
  })
  @get()
  static getNics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nic",
  })
  @post("{id}")
  static createNic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
