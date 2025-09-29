import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnrs")
export default class CnrController {
  @operation({
    summary: "Get Cnrs",
  })
  @get()
  static getCnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnr",
  })
  @post("{id}")
  static createCnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
