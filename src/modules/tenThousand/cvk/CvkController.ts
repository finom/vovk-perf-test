import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvks")
export default class CvkController {
  @operation({
    summary: "Get Cvks",
  })
  @get()
  static getCvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvk",
  })
  @post("{id}")
  static createCvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
