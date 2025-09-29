import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbts")
export default class CbtController {
  @operation({
    summary: "Get Cbts",
  })
  @get()
  static getCbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbt",
  })
  @post("{id}")
  static createCbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
