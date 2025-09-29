import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvcs")
export default class GvcController {
  @operation({
    summary: "Get Gvcs",
  })
  @get()
  static getGvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvc",
  })
  @post("{id}")
  static createGvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
