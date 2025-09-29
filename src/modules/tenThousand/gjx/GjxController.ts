import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjxes")
export default class GjxController {
  @operation({
    summary: "Get Gjxes",
  })
  @get()
  static getGjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjx",
  })
  @post("{id}")
  static createGjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
