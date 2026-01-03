import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvms")
export default class KvmController {
  @operation({
    summary: "Get Kvms",
  })
  @get()
  static getKvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvm",
  })
  @post("{id}")
  static createKvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
