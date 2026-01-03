import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcds")
export default class HcdController {
  @operation({
    summary: "Get Hcds",
  })
  @get()
  static getHcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcd",
  })
  @post("{id}")
  static createHcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
