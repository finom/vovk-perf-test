import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmis")
export default class HmiController {
  @operation({
    summary: "Get Hmis",
  })
  @get()
  static getHmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmi",
  })
  @post("{id}")
  static createHmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
