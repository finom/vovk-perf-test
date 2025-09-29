import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cggs")
export default class CggController {
  @operation({
    summary: "Get Cggs",
  })
  @get()
  static getCggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgg",
  })
  @post("{id}")
  static createCgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
