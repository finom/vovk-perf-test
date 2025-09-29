import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kins")
export default class KinController {
  @operation({
    summary: "Get Kins",
  })
  @get()
  static getKins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kin",
  })
  @post("{id}")
  static createKin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
