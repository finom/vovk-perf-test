import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcps")
export default class GcpController {
  @operation({
    summary: "Get Gcps",
  })
  @get()
  static getGcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcp",
  })
  @post("{id}")
  static createGcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
