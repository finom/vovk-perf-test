import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqgs")
export default class IqgController {
  @operation({
    summary: "Get Iqgs",
  })
  @get()
  static getIqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqg",
  })
  @post("{id}")
  static createIqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
