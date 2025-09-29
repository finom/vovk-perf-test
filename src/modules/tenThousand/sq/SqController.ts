import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sqs")
export default class SqController {
  @operation({
    summary: "Get Sqs",
  })
  @get()
  static getSqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sq",
  })
  @post("{id}")
  static createSq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
