import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgfs")
export default class DgfController {
  @operation({
    summary: "Get Dgfs",
  })
  @get()
  static getDgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgf",
  })
  @post("{id}")
  static createDgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
