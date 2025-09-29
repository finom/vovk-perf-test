import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdfs")
export default class MdfController {
  @operation({
    summary: "Get Mdfs",
  })
  @get()
  static getMdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdf",
  })
  @post("{id}")
  static createMdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
