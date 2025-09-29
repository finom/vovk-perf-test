import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dggs")
export default class DggController {
  @operation({
    summary: "Get Dggs",
  })
  @get()
  static getDggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgg",
  })
  @post("{id}")
  static createDgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
