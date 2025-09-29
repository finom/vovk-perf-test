import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hshes")
export default class HshController {
  @operation({
    summary: "Get Hshes",
  })
  @get()
  static getHshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsh",
  })
  @post("{id}")
  static createHsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
