import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdcs")
export default class BdcController {
  @operation({
    summary: "Get Bdcs",
  })
  @get()
  static getBdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdc",
  })
  @post("{id}")
  static createBdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
