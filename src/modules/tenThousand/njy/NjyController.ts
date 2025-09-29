import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njies")
export default class NjyController {
  @operation({
    summary: "Get Njies",
  })
  @get()
  static getNjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njy",
  })
  @post("{id}")
  static createNjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
