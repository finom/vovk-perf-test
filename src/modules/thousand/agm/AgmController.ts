import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agms")
export default class AgmController {
  @operation({
    summary: "Get Agms",
  })
  @get()
  static getAgms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agm",
  })
  @post("{id}")
  static createAgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
