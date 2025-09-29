import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mls")
export default class MlsController {
  @operation({
    summary: "Get Mls",
  })
  @get()
  static getMls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mls",
  })
  @post("{id}")
  static createMls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
