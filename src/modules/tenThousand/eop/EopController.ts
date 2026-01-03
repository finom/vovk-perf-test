import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eops")
export default class EopController {
  @operation({
    summary: "Get Eops",
  })
  @get()
  static getEops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eop",
  })
  @post("{id}")
  static createEop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
