import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpcs")
export default class HpcController {
  @operation({
    summary: "Get Hpcs",
  })
  @get()
  static getHpcs = procedure({
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
