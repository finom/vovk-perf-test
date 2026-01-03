import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpfs")
export default class HpfController {
  @operation({
    summary: "Get Hpfs",
  })
  @get()
  static getHpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpf",
  })
  @post("{id}")
  static createHpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
