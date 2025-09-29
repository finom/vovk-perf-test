import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iiks")
export default class IikController {
  @operation({
    summary: "Get Iiks",
  })
  @get()
  static getIiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iik",
  })
  @post("{id}")
  static createIik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
