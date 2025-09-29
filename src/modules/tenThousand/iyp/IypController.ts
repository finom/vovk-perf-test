import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyps")
export default class IypController {
  @operation({
    summary: "Get Iyps",
  })
  @get()
  static getIyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyp",
  })
  @post("{id}")
  static createIyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
