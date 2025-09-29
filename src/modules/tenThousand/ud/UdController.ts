import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uds")
export default class UdController {
  @operation({
    summary: "Get Uds",
  })
  @get()
  static getUds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ud",
  })
  @post("{id}")
  static createUd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
