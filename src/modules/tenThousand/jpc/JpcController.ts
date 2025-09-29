import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpcs")
export default class JpcController {
  @operation({
    summary: "Get Jpcs",
  })
  @get()
  static getJpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpc",
  })
  @post("{id}")
  static createJpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
