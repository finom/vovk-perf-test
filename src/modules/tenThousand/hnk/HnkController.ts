import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnks")
export default class HnkController {
  @operation({
    summary: "Get Hnks",
  })
  @get()
  static getHnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnk",
  })
  @post("{id}")
  static createHnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
