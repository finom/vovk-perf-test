import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqds")
export default class BqdController {
  @operation({
    summary: "Get Bqds",
  })
  @get()
  static getBqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqd",
  })
  @post("{id}")
  static createBqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
