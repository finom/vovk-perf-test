import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzfs")
export default class BzfController {
  @operation({
    summary: "Get Bzfs",
  })
  @get()
  static getBzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzf",
  })
  @post("{id}")
  static createBzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
