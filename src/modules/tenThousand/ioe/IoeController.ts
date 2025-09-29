import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioes")
export default class IoeController {
  @operation({
    summary: "Get Ioes",
  })
  @get()
  static getIoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioe",
  })
  @post("{id}")
  static createIoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
