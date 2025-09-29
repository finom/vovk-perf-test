import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlzs")
export default class DlzController {
  @operation({
    summary: "Get Dlzs",
  })
  @get()
  static getDlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlz",
  })
  @post("{id}")
  static createDlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
