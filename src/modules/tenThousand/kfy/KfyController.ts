import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfies")
export default class KfyController {
  @operation({
    summary: "Get Kfies",
  })
  @get()
  static getKfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfy",
  })
  @post("{id}")
  static createKfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
