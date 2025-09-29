import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcis")
export default class DciController {
  @operation({
    summary: "Get Dcis",
  })
  @get()
  static getDcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dci",
  })
  @post("{id}")
  static createDci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
