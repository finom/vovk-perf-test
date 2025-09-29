import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlis")
export default class HliController {
  @operation({
    summary: "Get Hlis",
  })
  @get()
  static getHlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hli",
  })
  @post("{id}")
  static createHli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
