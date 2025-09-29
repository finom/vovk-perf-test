import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfcs")
export default class JfcController {
  @operation({
    summary: "Get Jfcs",
  })
  @get()
  static getJfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfc",
  })
  @post("{id}")
  static createJfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
