import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jries")
export default class JryController {
  @operation({
    summary: "Get Jries",
  })
  @get()
  static getJries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jry",
  })
  @post("{id}")
  static createJry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
