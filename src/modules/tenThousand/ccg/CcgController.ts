import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccg")
export default class CcgController {
  @operation({
    summary: "Get Ccg",
  })
  @get()
  static getCcg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccg",
  })
  @post("{id}")
  static createCcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
