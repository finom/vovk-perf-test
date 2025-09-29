import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irns")
export default class IrnController {
  @operation({
    summary: "Get Irns",
  })
  @get()
  static getIrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irn",
  })
  @post("{id}")
  static createIrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
