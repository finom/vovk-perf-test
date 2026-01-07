import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csj")
export default class CsjController {
  @operation({
    summary: "Get Csj",
  })
  @get()
  static getCsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csj",
  })
  @post("{id}")
  static createCsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
