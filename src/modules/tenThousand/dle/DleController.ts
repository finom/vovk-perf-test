import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dles")
export default class DleController {
  @operation({
    summary: "Get Dles",
  })
  @get()
  static getDles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dle",
  })
  @post("{id}")
  static createDle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
