import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ups")
export default class UpController {
  @operation({
    summary: "Get Ups",
  })
  @get()
  static getUps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Up",
  })
  @post("{id}")
  static createUp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
