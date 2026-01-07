import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctt")
export default class CttController {
  @operation({
    summary: "Get Ctt",
  })
  @get()
  static getCtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctt",
  })
  @post("{id}")
  static createCtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
