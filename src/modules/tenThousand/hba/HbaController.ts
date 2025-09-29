import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbas")
export default class HbaController {
  @operation({
    summary: "Get Hbas",
  })
  @get()
  static getHbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hba",
  })
  @post("{id}")
  static createHba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
