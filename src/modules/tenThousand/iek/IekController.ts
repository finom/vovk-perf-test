import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieks")
export default class IekController {
  @operation({
    summary: "Get Ieks",
  })
  @get()
  static getIeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iek",
  })
  @post("{id}")
  static createIek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
