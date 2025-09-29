import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mycs")
export default class MycController {
  @operation({
    summary: "Get Mycs",
  })
  @get()
  static getMycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myc",
  })
  @post("{id}")
  static createMyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
