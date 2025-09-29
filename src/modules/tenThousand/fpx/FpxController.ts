import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpxes")
export default class FpxController {
  @operation({
    summary: "Get Fpxes",
  })
  @get()
  static getFpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpx",
  })
  @post("{id}")
  static createFpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
