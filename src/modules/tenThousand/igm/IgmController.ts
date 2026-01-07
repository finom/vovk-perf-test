import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igm")
export default class IgmController {
  @operation({
    summary: "Get Igm",
  })
  @get()
  static getIgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igm",
  })
  @post("{id}")
  static createIgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
