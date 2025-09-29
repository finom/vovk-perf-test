import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvqs")
export default class CvqController {
  @operation({
    summary: "Get Cvqs",
  })
  @get()
  static getCvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvq",
  })
  @post("{id}")
  static createCvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
