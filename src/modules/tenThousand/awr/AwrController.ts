import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awrs")
export default class AwrController {
  @operation({
    summary: "Get Awrs",
  })
  @get()
  static getAwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awr",
  })
  @post("{id}")
  static createAwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
