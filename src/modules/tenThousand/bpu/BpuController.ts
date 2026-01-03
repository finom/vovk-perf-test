import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpus")
export default class BpuController {
  @operation({
    summary: "Get Bpus",
  })
  @get()
  static getBpus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpu",
  })
  @post("{id}")
  static createBpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
