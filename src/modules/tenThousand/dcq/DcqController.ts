import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcqs")
export default class DcqController {
  @operation({
    summary: "Get Dcqs",
  })
  @get()
  static getDcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcq",
  })
  @post("{id}")
  static createDcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
