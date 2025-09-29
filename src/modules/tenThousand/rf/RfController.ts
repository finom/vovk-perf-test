import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rfs")
export default class RfController {
  @operation({
    summary: "Get Rfs",
  })
  @get()
  static getRfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rf",
  })
  @post("{id}")
  static createRf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
