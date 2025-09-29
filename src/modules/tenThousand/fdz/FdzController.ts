import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdzs")
export default class FdzController {
  @operation({
    summary: "Get Fdzs",
  })
  @get()
  static getFdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdz",
  })
  @post("{id}")
  static createFdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
