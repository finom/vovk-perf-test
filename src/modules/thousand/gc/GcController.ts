import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcs")
export default class GcController {
  @operation({
    summary: "Get Gcs",
  })
  @get()
  static getGcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gc",
  })
  @post("{id}")
  static createGc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
