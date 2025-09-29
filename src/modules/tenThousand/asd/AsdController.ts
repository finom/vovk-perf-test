import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asds")
export default class AsdController {
  @operation({
    summary: "Get Asds",
  })
  @get()
  static getAsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asd",
  })
  @post("{id}")
  static createAsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
