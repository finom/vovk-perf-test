import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ishes")
export default class IshController {
  @operation({
    summary: "Get Ishes",
  })
  @get()
  static getIshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ish",
  })
  @post("{id}")
  static createIsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
