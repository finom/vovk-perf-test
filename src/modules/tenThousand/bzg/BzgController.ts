import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzgs")
export default class BzgController {
  @operation({
    summary: "Get Bzgs",
  })
  @get()
  static getBzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzg",
  })
  @post("{id}")
  static createBzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
