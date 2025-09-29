import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddhs")
export default class DdhController {
  @operation({
    summary: "Get Ddhs",
  })
  @get()
  static getDdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddh",
  })
  @post("{id}")
  static createDdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
