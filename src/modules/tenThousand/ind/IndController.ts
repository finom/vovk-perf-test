import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ind")
export default class IndController {
  @operation({
    summary: "Get Ind",
  })
  @get()
  static getInd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ind",
  })
  @post("{id}")
  static createInd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
