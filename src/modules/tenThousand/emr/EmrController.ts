import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emrs")
export default class EmrController {
  @operation({
    summary: "Get Emrs",
  })
  @get()
  static getEmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emr",
  })
  @post("{id}")
  static createEmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
