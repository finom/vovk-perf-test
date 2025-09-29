import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwbs")
export default class IwbController {
  @operation({
    summary: "Get Iwbs",
  })
  @get()
  static getIwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwb",
  })
  @post("{id}")
  static createIwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
