import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfies")
export default class HfyController {
  @operation({
    summary: "Get Hfies",
  })
  @get()
  static getHfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfy",
  })
  @post("{id}")
  static createHfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
