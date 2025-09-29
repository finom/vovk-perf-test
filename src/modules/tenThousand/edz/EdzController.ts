import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edzs")
export default class EdzController {
  @operation({
    summary: "Get Edzs",
  })
  @get()
  static getEdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edz",
  })
  @post("{id}")
  static createEdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
