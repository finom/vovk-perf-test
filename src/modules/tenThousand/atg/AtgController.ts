import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atg")
export default class AtgController {
  @operation({
    summary: "Get Atg",
  })
  @get()
  static getAtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atg",
  })
  @post("{id}")
  static createAtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
