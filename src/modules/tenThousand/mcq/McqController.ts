import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcqs")
export default class McqController {
  @operation({
    summary: "Get Mcqs",
  })
  @get()
  static getMcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcq",
  })
  @post("{id}")
  static createMcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
