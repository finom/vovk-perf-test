import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebds")
export default class EbdController {
  @operation({
    summary: "Get Ebds",
  })
  @get()
  static getEbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebd",
  })
  @post("{id}")
  static createEbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
