import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpus")
export default class DpuController {
  @operation({
    summary: "Get Dpus",
  })
  @get()
  static getDpus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpu",
  })
  @post("{id}")
  static createDpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
