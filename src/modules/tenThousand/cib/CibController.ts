import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cibs")
export default class CibController {
  @operation({
    summary: "Get Cibs",
  })
  @get()
  static getCibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cib",
  })
  @post("{id}")
  static createCib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
