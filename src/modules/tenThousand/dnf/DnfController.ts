import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnfs")
export default class DnfController {
  @operation({
    summary: "Get Dnfs",
  })
  @get()
  static getDnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnf",
  })
  @post("{id}")
  static createDnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
