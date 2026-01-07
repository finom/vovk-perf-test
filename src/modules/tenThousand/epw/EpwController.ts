import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epw")
export default class EpwController {
  @operation({
    summary: "Get Epw",
  })
  @get()
  static getEpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epw",
  })
  @post("{id}")
  static createEpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
