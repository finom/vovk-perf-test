import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaks")
export default class AakController {
  @operation({
    summary: "Get Aaks",
  })
  @get()
  static getAaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aak",
  })
  @post("{id}")
  static createAak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
