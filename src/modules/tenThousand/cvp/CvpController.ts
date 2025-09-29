import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvps")
export default class CvpController {
  @operation({
    summary: "Get Cvps",
  })
  @get()
  static getCvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvp",
  })
  @post("{id}")
  static createCvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
