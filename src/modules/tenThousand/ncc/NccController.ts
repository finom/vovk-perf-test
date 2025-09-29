import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nccs")
export default class NccController {
  @operation({
    summary: "Get Nccs",
  })
  @get()
  static getNccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncc",
  })
  @post("{id}")
  static createNcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
