import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjbs")
export default class HjbController {
  @operation({
    summary: "Get Hjbs",
  })
  @get()
  static getHjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjb",
  })
  @post("{id}")
  static createHjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
