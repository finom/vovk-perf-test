import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpc")
export default class HpcController {
  @operation({
    summary: "Get Hpc",
  })
  @get()
  static getHpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpc",
  })
  @post("{id}")
  static createHpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
