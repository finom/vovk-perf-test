import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgxes")
export default class DgxController {
  @operation({
    summary: "Get Dgxes",
  })
  @get()
  static getDgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgx",
  })
  @post("{id}")
  static createDgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
