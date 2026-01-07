import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epy")
export default class EpyController {
  @operation({
    summary: "Get Epy",
  })
  @get()
  static getEpy = procedure({
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
