import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gygs")
export default class GygController {
  @operation({
    summary: "Get Gygs",
  })
  @get()
  static getGygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyg",
  })
  @post("{id}")
  static createGyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
