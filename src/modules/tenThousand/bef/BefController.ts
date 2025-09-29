import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("befs")
export default class BefController {
  @operation({
    summary: "Get Befs",
  })
  @get()
  static getBefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bef",
  })
  @post("{id}")
  static createBef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
