import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnds")
export default class HndController {
  @operation({
    summary: "Get Hnds",
  })
  @get()
  static getHnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnd",
  })
  @post("{id}")
  static createHnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
