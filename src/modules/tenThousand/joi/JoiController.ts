import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jois")
export default class JoiController {
  @operation({
    summary: "Get Jois",
  })
  @get()
  static getJois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joi",
  })
  @post("{id}")
  static createJoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
