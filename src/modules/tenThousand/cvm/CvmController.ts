import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvms")
export default class CvmController {
  @operation({
    summary: "Get Cvms",
  })
  @get()
  static getCvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvm",
  })
  @post("{id}")
  static createCvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
