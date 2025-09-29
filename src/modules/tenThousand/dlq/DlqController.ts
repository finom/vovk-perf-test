import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlqs")
export default class DlqController {
  @operation({
    summary: "Get Dlqs",
  })
  @get()
  static getDlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlq",
  })
  @post("{id}")
  static createDlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
