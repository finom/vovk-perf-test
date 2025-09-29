import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvhs")
export default class CvhController {
  @operation({
    summary: "Get Cvhs",
  })
  @get()
  static getCvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvh",
  })
  @post("{id}")
  static createCvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
