import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khos")
export default class KhoController {
  @operation({
    summary: "Get Khos",
  })
  @get()
  static getKhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kho",
  })
  @post("{id}")
  static createKho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
