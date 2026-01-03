import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epfs")
export default class EpfController {
  @operation({
    summary: "Get Epfs",
  })
  @get()
  static getEpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epf",
  })
  @post("{id}")
  static createEpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
