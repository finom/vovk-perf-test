import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itbs")
export default class ItbController {
  @operation({
    summary: "Get Itbs",
  })
  @get()
  static getItbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itb",
  })
  @post("{id}")
  static createItb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
