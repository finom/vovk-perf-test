import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpi")
export default class HpiController {
  @operation({
    summary: "Get Hpi",
  })
  @get()
  static getHpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpi",
  })
  @post("{id}")
  static createHpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
