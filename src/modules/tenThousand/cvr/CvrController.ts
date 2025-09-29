import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvrs")
export default class CvrController {
  @operation({
    summary: "Get Cvrs",
  })
  @get()
  static getCvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvr",
  })
  @post("{id}")
  static createCvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
