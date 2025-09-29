import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfies")
export default class JfyController {
  @operation({
    summary: "Get Jfies",
  })
  @get()
  static getJfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfy",
  })
  @post("{id}")
  static createJfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
