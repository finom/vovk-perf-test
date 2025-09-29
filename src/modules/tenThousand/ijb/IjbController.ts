import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijbs")
export default class IjbController {
  @operation({
    summary: "Get Ijbs",
  })
  @get()
  static getIjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijb",
  })
  @post("{id}")
  static createIjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
