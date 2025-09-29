import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csds")
export default class CsdController {
  @operation({
    summary: "Get Csds",
  })
  @get()
  static getCsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csd",
  })
  @post("{id}")
  static createCsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
