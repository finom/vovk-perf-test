import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezes")
export default class EzeController {
  @operation({
    summary: "Get Ezes",
  })
  @get()
  static getEzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eze",
  })
  @post("{id}")
  static createEze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
