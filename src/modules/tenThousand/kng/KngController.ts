import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kngs")
export default class KngController {
  @operation({
    summary: "Get Kngs",
  })
  @get()
  static getKngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kng",
  })
  @post("{id}")
  static createKng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
