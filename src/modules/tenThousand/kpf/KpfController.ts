import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpfs")
export default class KpfController {
  @operation({
    summary: "Get Kpfs",
  })
  @get()
  static getKpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpf",
  })
  @post("{id}")
  static createKpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
