import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlms")
export default class DlmController {
  @operation({
    summary: "Get Dlms",
  })
  @get()
  static getDlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlm",
  })
  @post("{id}")
  static createDlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
