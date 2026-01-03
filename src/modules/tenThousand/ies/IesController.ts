import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ies")
export default class IesController {
  @operation({
    summary: "Get Ies",
  })
  @get()
  static getIes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ies",
  })
  @post("{id}")
  static createIes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
