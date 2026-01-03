import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpfs")
export default class GpfController {
  @operation({
    summary: "Get Gpfs",
  })
  @get()
  static getGpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpf",
  })
  @post("{id}")
  static createGpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
