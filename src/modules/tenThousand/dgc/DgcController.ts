import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgcs")
export default class DgcController {
  @operation({
    summary: "Get Dgcs",
  })
  @get()
  static getDgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgc",
  })
  @post("{id}")
  static createDgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
