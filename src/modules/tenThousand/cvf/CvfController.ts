import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvfs")
export default class CvfController {
  @operation({
    summary: "Get Cvfs",
  })
  @get()
  static getCvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvf",
  })
  @post("{id}")
  static createCvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
