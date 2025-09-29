import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgs")
export default class DgController {
  @operation({
    summary: "Get Dgs",
  })
  @get()
  static getDgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dg",
  })
  @post("{id}")
  static createDg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
