import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dncs")
export default class DncController {
  @operation({
    summary: "Get Dncs",
  })
  @get()
  static getDncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnc",
  })
  @post("{id}")
  static createDnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
