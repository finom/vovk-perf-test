import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcs")
export default class GcsController {
  @operation({
    summary: "Get Gcs",
  })
  @get()
  static getGcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcs",
  })
  @post("{id}")
  static createGcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
