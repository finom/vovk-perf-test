import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntfs")
export default class NtfController {
  @operation({
    summary: "Get Ntfs",
  })
  @get()
  static getNtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntf",
  })
  @post("{id}")
  static createNtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
