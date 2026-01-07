import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epm")
export default class EpmController {
  @operation({
    summary: "Get Epm",
  })
  @get()
  static getEpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epm",
  })
  @post("{id}")
  static createEpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
