import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kabs")
export default class KabController {
  @operation({
    summary: "Get Kabs",
  })
  @get()
  static getKabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kab",
  })
  @post("{id}")
  static createKab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
