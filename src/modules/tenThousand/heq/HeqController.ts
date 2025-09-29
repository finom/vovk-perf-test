import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heqs")
export default class HeqController {
  @operation({
    summary: "Get Heqs",
  })
  @get()
  static getHeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heq",
  })
  @post("{id}")
  static createHeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
