import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eps")
export default class EpsController {
  @operation({
    summary: "Get Eps",
  })
  @get()
  static getEps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eps",
  })
  @post("{id}")
  static createEps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
