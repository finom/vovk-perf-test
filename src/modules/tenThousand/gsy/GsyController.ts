import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsies")
export default class GsyController {
  @operation({
    summary: "Get Gsies",
  })
  @get()
  static getGsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsy",
  })
  @post("{id}")
  static createGsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
