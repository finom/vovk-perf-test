import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdms")
export default class MdmController {
  @operation({
    summary: "Get Mdms",
  })
  @get()
  static getMdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdm",
  })
  @post("{id}")
  static createMdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
