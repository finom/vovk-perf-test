import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfcs")
export default class BfcController {
  @operation({
    summary: "Get Bfcs",
  })
  @get()
  static getBfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfc",
  })
  @post("{id}")
  static createBfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
