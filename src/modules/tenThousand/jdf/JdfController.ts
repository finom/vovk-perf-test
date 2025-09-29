import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdfs")
export default class JdfController {
  @operation({
    summary: "Get Jdfs",
  })
  @get()
  static getJdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdf",
  })
  @post("{id}")
  static createJdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
