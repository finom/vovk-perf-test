import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndfs")
export default class NdfController {
  @operation({
    summary: "Get Ndfs",
  })
  @get()
  static getNdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndf",
  })
  @post("{id}")
  static createNdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
