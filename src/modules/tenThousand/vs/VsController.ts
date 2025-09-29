import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vs")
export default class VsController {
  @operation({
    summary: "Get Vs",
  })
  @get()
  static getVs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vs",
  })
  @post("{id}")
  static createVs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
