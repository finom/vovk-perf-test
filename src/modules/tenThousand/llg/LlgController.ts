import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llgs")
export default class LlgController {
  @operation({
    summary: "Get Llgs",
  })
  @get()
  static getLlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llg",
  })
  @post("{id}")
  static createLlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
