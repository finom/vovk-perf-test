import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpf")
export default class GpfController {
  @operation({
    summary: "Get Gpf",
  })
  @get()
  static getGpf = procedure({
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
