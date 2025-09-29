import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvds")
export default class CvdController {
  @operation({
    summary: "Get Cvds",
  })
  @get()
  static getCvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvd",
  })
  @post("{id}")
  static createCvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
