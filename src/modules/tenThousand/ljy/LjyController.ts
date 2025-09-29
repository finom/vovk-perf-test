import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljies")
export default class LjyController {
  @operation({
    summary: "Get Ljies",
  })
  @get()
  static getLjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljy",
  })
  @post("{id}")
  static createLjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
