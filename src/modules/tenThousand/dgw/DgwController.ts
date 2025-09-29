import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgws")
export default class DgwController {
  @operation({
    summary: "Get Dgws",
  })
  @get()
  static getDgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgw",
  })
  @post("{id}")
  static createDgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
