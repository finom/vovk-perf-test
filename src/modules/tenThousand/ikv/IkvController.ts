import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikvs")
export default class IkvController {
  @operation({
    summary: "Get Ikvs",
  })
  @get()
  static getIkvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikv",
  })
  @post("{id}")
  static createIkv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
