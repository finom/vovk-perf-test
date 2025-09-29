import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpxes")
export default class CpxController {
  @operation({
    summary: "Get Cpxes",
  })
  @get()
  static getCpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpx",
  })
  @post("{id}")
  static createCpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
