import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbds")
export default class CbdController {
  @operation({
    summary: "Get Cbds",
  })
  @get()
  static getCbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbd",
  })
  @post("{id}")
  static createCbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
