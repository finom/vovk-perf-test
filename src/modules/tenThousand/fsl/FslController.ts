import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsls")
export default class FslController {
  @operation({
    summary: "Get Fsls",
  })
  @get()
  static getFsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsl",
  })
  @post("{id}")
  static createFsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
