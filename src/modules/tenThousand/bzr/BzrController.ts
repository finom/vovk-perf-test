import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzrs")
export default class BzrController {
  @operation({
    summary: "Get Bzrs",
  })
  @get()
  static getBzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzr",
  })
  @post("{id}")
  static createBzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
