import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpus")
export default class FpuController {
  @operation({
    summary: "Get Fpus",
  })
  @get()
  static getFpus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpu",
  })
  @post("{id}")
  static createFpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
