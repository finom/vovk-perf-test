import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeys")
export default class JeyController {
  @operation({
    summary: "Get Jeys",
  })
  @get()
  static getJeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jey",
  })
  @post("{id}")
  static createJey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
