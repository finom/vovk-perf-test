import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlgs")
export default class MlgController {
  @operation({
    summary: "Get Mlgs",
  })
  @get()
  static getMlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlg",
  })
  @post("{id}")
  static createMlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
