import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnrs")
export default class DnrController {
  @operation({
    summary: "Get Dnrs",
  })
  @get()
  static getDnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnr",
  })
  @post("{id}")
  static createDnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
