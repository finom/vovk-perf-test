import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgs")
export default class BgsController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgs",
  })
  @post("{id}")
  static createBgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
