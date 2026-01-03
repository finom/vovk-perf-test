import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwls")
export default class CwlController {
  @operation({
    summary: "Get Cwls",
  })
  @get()
  static getCwls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwl",
  })
  @post("{id}")
  static createCwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
