import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcl")
export default class HclController {
  @operation({
    summary: "Get Hcl",
  })
  @get()
  static getHcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcl",
  })
  @post("{id}")
  static createHcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
