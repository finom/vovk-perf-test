import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ends")
export default class EndController {
  @operation({
    summary: "Get Ends",
  })
  @get()
  static getEnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create End",
  })
  @post("{id}")
  static createEnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
