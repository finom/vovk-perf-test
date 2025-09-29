import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jegs")
export default class JegController {
  @operation({
    summary: "Get Jegs",
  })
  @get()
  static getJegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeg",
  })
  @post("{id}")
  static createJeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
