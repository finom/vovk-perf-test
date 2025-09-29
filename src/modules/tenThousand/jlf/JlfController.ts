import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlves")
export default class JlfController {
  @operation({
    summary: "Get Jlves",
  })
  @get()
  static getJlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlf",
  })
  @post("{id}")
  static createJlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
