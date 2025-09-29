import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byds")
export default class BydController {
  @operation({
    summary: "Get Byds",
  })
  @get()
  static getByds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byd",
  })
  @post("{id}")
  static createByd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
