import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iam")
export default class IamController {
  @operation({
    summary: "Get Iam",
  })
  @get()
  static getIam = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iam",
  })
  @post("{id}")
  static createIam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
