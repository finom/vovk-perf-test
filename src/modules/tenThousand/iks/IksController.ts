import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iks")
export default class IksController {
  @operation({
    summary: "Get Iks",
  })
  @get()
  static getIks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iks",
  })
  @post("{id}")
  static createIks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
