import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beks")
export default class BekController {
  @operation({
    summary: "Get Beks",
  })
  @get()
  static getBeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bek",
  })
  @post("{id}")
  static createBek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
