import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mds")
export default class MdController {
  @operation({
    summary: "Get Mds",
  })
  @get()
  static getMds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Md",
  })
  @post("{id}")
  static createMd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
