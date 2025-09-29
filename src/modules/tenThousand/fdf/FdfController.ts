import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdfs")
export default class FdfController {
  @operation({
    summary: "Get Fdfs",
  })
  @get()
  static getFdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdf",
  })
  @post("{id}")
  static createFdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
