import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktzs")
export default class KtzController {
  @operation({
    summary: "Get Ktzs",
  })
  @get()
  static getKtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktz",
  })
  @post("{id}")
  static createKtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
