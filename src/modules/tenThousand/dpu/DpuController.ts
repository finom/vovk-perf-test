import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpu")
export default class DpuController {
  @operation({
    summary: "Get Dpu",
  })
  @get()
  static getDpu = procedure({
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
