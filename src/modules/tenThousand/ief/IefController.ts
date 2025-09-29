import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iefs")
export default class IefController {
  @operation({
    summary: "Get Iefs",
  })
  @get()
  static getIefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ief",
  })
  @post("{id}")
  static createIef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
