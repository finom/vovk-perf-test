import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awus")
export default class AwuController {
  @operation({
    summary: "Get Awus",
  })
  @get()
  static getAwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awu",
  })
  @post("{id}")
  static createAwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
