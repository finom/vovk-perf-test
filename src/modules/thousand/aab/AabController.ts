import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aabs")
export default class AabController {
  @operation({
    summary: "Get Aabs",
  })
  @get()
  static getAabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aab",
  })
  @post("{id}")
  static createAab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
