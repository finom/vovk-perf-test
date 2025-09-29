import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efies")
export default class EfyController {
  @operation({
    summary: "Get Efies",
  })
  @get()
  static getEfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efy",
  })
  @post("{id}")
  static createEfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
