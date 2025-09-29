import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsfs")
export default class GsfController {
  @operation({
    summary: "Get Gsfs",
  })
  @get()
  static getGsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsf",
  })
  @post("{id}")
  static createGsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
