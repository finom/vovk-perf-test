import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgzs")
export default class DgzController {
  @operation({
    summary: "Get Dgzs",
  })
  @get()
  static getDgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgz",
  })
  @post("{id}")
  static createDgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
