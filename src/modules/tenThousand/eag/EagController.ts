import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eag")
export default class EagController {
  @operation({
    summary: "Get Eag",
  })
  @get()
  static getEag = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eag",
  })
  @post("{id}")
  static createEag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
