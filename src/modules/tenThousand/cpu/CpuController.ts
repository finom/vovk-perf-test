import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpu")
export default class CpuController {
  @operation({
    summary: "Get Cpu",
  })
  @get()
  static getCpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpu",
  })
  @post("{id}")
  static createCpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
