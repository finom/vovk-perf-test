import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzus")
export default class BzuController {
  @operation({
    summary: "Get Bzus",
  })
  @get()
  static getBzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzu",
  })
  @post("{id}")
  static createBzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
