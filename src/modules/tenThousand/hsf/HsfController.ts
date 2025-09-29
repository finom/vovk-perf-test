import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsfs")
export default class HsfController {
  @operation({
    summary: "Get Hsfs",
  })
  @get()
  static getHsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsf",
  })
  @post("{id}")
  static createHsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
