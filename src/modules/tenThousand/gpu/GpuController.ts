import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpu")
export default class GpuController {
  @operation({
    summary: "Get Gpu",
  })
  @get()
  static getGpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpu",
  })
  @post("{id}")
  static createGpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
