import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmus")
export default class NmuController {
  @operation({
    summary: "Get Nmus",
  })
  @get()
  static getNmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmu",
  })
  @post("{id}")
  static createNmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
