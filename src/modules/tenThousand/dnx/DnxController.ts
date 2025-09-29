import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnxes")
export default class DnxController {
  @operation({
    summary: "Get Dnxes",
  })
  @get()
  static getDnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnx",
  })
  @post("{id}")
  static createDnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
