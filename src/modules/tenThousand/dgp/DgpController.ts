import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgps")
export default class DgpController {
  @operation({
    summary: "Get Dgps",
  })
  @get()
  static getDgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgp",
  })
  @post("{id}")
  static createDgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
