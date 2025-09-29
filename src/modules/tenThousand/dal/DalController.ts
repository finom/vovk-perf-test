import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dals")
export default class DalController {
  @operation({
    summary: "Get Dals",
  })
  @get()
  static getDals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dal",
  })
  @post("{id}")
  static createDal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
