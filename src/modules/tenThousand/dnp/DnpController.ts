import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnps")
export default class DnpController {
  @operation({
    summary: "Get Dnps",
  })
  @get()
  static getDnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnp",
  })
  @post("{id}")
  static createDnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
