import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqvs")
export default class IqvController {
  @operation({
    summary: "Get Iqvs",
  })
  @get()
  static getIqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqv",
  })
  @post("{id}")
  static createIqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
