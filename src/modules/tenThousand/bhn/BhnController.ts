import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhns")
export default class BhnController {
  @operation({
    summary: "Get Bhns",
  })
  @get()
  static getBhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhn",
  })
  @post("{id}")
  static createBhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
