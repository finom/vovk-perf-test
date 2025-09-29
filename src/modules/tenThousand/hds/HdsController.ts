import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hds")
export default class HdsController {
  @operation({
    summary: "Get Hds",
  })
  @get()
  static getHds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hds",
  })
  @post("{id}")
  static createHds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
