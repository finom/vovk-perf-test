import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsvs")
export default class DsvController {
  @operation({
    summary: "Get Dsvs",
  })
  @get()
  static getDsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsv",
  })
  @post("{id}")
  static createDsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
