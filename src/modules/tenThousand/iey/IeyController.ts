import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieys")
export default class IeyController {
  @operation({
    summary: "Get Ieys",
  })
  @get()
  static getIeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iey",
  })
  @post("{id}")
  static createIey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
