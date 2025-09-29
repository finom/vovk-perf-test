import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgjs")
export default class DgjController {
  @operation({
    summary: "Get Dgjs",
  })
  @get()
  static getDgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgj",
  })
  @post("{id}")
  static createDgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
