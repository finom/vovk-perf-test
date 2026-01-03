import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eprs")
export default class EprController {
  @operation({
    summary: "Get Eprs",
  })
  @get()
  static getEprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epr",
  })
  @post("{id}")
  static createEpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
