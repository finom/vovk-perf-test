import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfs")
export default class MfController {
  @operation({
    summary: "Get Mfs",
  })
  @get()
  static getMfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mf",
  })
  @post("{id}")
  static createMf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
