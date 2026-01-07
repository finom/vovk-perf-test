import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmx")
export default class CmxController {
  @operation({
    summary: "Get Cmx",
  })
  @get()
  static getCmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmx",
  })
  @post("{id}")
  static createCmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
