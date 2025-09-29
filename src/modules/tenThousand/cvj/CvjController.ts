import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvjs")
export default class CvjController {
  @operation({
    summary: "Get Cvjs",
  })
  @get()
  static getCvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvj",
  })
  @post("{id}")
  static createCvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
