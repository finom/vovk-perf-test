import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsfs")
export default class FsfController {
  @operation({
    summary: "Get Fsfs",
  })
  @get()
  static getFsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsf",
  })
  @post("{id}")
  static createFsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
