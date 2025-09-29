import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhis")
export default class BhiController {
  @operation({
    summary: "Get Bhis",
  })
  @get()
  static getBhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhi",
  })
  @post("{id}")
  static createBhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
