import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsds")
export default class HsdController {
  @operation({
    summary: "Get Hsds",
  })
  @get()
  static getHsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsd",
  })
  @post("{id}")
  static createHsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
