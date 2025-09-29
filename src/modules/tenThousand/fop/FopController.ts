import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fops")
export default class FopController {
  @operation({
    summary: "Get Fops",
  })
  @get()
  static getFops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fop",
  })
  @post("{id}")
  static createFop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
