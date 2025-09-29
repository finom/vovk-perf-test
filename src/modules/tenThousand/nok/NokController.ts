import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noks")
export default class NokController {
  @operation({
    summary: "Get Noks",
  })
  @get()
  static getNoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nok",
  })
  @post("{id}")
  static createNok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
