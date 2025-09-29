import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsies")
export default class BsyController {
  @operation({
    summary: "Get Bsies",
  })
  @get()
  static getBsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsy",
  })
  @post("{id}")
  static createBsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
