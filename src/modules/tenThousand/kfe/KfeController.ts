import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfes")
export default class KfeController {
  @operation({
    summary: "Get Kfes",
  })
  @get()
  static getKfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfe",
  })
  @post("{id}")
  static createKfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
