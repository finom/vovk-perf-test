import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awcs")
export default class AwcController {
  @operation({
    summary: "Get Awcs",
  })
  @get()
  static getAwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awc",
  })
  @post("{id}")
  static createAwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
