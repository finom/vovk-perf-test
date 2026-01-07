import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cht")
export default class ChtController {
  @operation({
    summary: "Get Cht",
  })
  @get()
  static getCht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cht",
  })
  @post("{id}")
  static createCht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
