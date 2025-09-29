import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgls")
export default class DglController {
  @operation({
    summary: "Get Dgls",
  })
  @get()
  static getDgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgl",
  })
  @post("{id}")
  static createDgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
