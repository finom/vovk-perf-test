import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lms")
export default class LmsController {
  @operation({
    summary: "Get Lms",
  })
  @get()
  static getLms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lms",
  })
  @post("{id}")
  static createLms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
