import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkds")
export default class DkdController {
  @operation({
    summary: "Get Dkds",
  })
  @get()
  static getDkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkd",
  })
  @post("{id}")
  static createDkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
