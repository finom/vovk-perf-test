import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uis")
export default class UiController {
  @operation({
    summary: "Get Uis",
  })
  @get()
  static getUis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ui",
  })
  @post("{id}")
  static createUi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
