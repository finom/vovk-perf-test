import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsbs")
export default class BsbController {
  @operation({
    summary: "Get Bsbs",
  })
  @get()
  static getBsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsb",
  })
  @post("{id}")
  static createBsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
