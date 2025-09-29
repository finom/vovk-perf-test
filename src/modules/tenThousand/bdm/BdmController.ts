import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdms")
export default class BdmController {
  @operation({
    summary: "Get Bdms",
  })
  @get()
  static getBdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdm",
  })
  @post("{id}")
  static createBdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
