import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxcs")
export default class MxcController {
  @operation({
    summary: "Get Mxcs",
  })
  @get()
  static getMxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxc",
  })
  @post("{id}")
  static createMxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
