import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhies")
export default class DhyController {
  @operation({
    summary: "Get Dhies",
  })
  @get()
  static getDhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhy",
  })
  @post("{id}")
  static createDhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
