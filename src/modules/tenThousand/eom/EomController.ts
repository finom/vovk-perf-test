import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eom")
export default class EomController {
  @operation({
    summary: "Get Eom",
  })
  @get()
  static getEom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eom",
  })
  @post("{id}")
  static createEom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
