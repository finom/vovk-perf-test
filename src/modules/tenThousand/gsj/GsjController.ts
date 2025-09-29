import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsjs")
export default class GsjController {
  @operation({
    summary: "Get Gsjs",
  })
  @get()
  static getGsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsj",
  })
  @post("{id}")
  static createGsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
