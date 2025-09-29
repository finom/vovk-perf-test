import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgls")
export default class MglController {
  @operation({
    summary: "Get Mgls",
  })
  @get()
  static getMgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgl",
  })
  @post("{id}")
  static createMgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
