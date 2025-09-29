import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lues")
export default class LueController {
  @operation({
    summary: "Get Lues",
  })
  @get()
  static getLues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lue",
  })
  @post("{id}")
  static createLue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
