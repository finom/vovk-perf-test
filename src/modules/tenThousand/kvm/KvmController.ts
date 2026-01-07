import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvm")
export default class KvmController {
  @operation({
    summary: "Get Kvm",
  })
  @get()
  static getKvm = procedure({
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
