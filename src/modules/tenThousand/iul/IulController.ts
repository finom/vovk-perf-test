import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iul")
export default class IulController {
  @operation({
    summary: "Get Iul",
  })
  @get()
  static getIul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iul",
  })
  @post("{id}")
  static createIul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
