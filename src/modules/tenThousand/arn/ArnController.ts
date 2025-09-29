import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arns")
export default class ArnController {
  @operation({
    summary: "Get Arns",
  })
  @get()
  static getArns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arn",
  })
  @post("{id}")
  static createArn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
