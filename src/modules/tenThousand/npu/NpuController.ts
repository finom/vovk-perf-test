import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npu")
export default class NpuController {
  @operation({
    summary: "Get Npu",
  })
  @get()
  static getNpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npu",
  })
  @post("{id}")
  static createNpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
