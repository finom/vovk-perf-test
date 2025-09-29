import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnws")
export default class DnwController {
  @operation({
    summary: "Get Dnws",
  })
  @get()
  static getDnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnw",
  })
  @post("{id}")
  static createDnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
