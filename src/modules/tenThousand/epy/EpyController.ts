import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epies")
export default class EpyController {
  @operation({
    summary: "Get Epies",
  })
  @get()
  static getEpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epy",
  })
  @post("{id}")
  static createEpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
