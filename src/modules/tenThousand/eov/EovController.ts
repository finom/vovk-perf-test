import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eovs")
export default class EovController {
  @operation({
    summary: "Get Eovs",
  })
  @get()
  static getEovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eov",
  })
  @post("{id}")
  static createEov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
