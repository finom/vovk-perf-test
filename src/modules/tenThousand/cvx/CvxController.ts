import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvxes")
export default class CvxController {
  @operation({
    summary: "Get Cvxes",
  })
  @get()
  static getCvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvx",
  })
  @post("{id}")
  static createCvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
