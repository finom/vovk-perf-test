import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmp")
export default class HmpController {
  @operation({
    summary: "Get Hmp",
  })
  @get()
  static getHmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmp",
  })
  @post("{id}")
  static createHmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
