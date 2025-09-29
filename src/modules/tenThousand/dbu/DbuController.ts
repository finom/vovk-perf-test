import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbus")
export default class DbuController {
  @operation({
    summary: "Get Dbus",
  })
  @get()
  static getDbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbu",
  })
  @post("{id}")
  static createDbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
