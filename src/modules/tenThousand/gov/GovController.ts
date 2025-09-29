import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("govs")
export default class GovController {
  @operation({
    summary: "Get Govs",
  })
  @get()
  static getGovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gov",
  })
  @post("{id}")
  static createGov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
