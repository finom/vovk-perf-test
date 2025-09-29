import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsfs")
export default class BsfController {
  @operation({
    summary: "Get Bsfs",
  })
  @get()
  static getBsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsf",
  })
  @post("{id}")
  static createBsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
