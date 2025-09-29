import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fips")
export default class FipController {
  @operation({
    summary: "Get Fips",
  })
  @get()
  static getFips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fip",
  })
  @post("{id}")
  static createFip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
