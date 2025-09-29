import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxcs")
export default class CxcController {
  @operation({
    summary: "Get Cxcs",
  })
  @get()
  static getCxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxc",
  })
  @post("{id}")
  static createCxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
