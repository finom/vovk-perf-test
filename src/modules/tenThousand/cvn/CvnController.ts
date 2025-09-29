import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvns")
export default class CvnController {
  @operation({
    summary: "Get Cvns",
  })
  @get()
  static getCvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvn",
  })
  @post("{id}")
  static createCvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
