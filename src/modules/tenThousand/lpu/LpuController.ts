import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpus")
export default class LpuController {
  @operation({
    summary: "Get Lpus",
  })
  @get()
  static getLpus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpu",
  })
  @post("{id}")
  static createLpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
