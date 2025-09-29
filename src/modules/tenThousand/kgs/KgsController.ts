import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgs")
export default class KgsController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgs",
  })
  @post("{id}")
  static createKgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
