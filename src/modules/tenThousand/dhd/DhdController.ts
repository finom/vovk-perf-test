import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhds")
export default class DhdController {
  @operation({
    summary: "Get Dhds",
  })
  @get()
  static getDhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhd",
  })
  @post("{id}")
  static createDhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
