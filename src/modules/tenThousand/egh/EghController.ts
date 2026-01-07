import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egh")
export default class EghController {
  @operation({
    summary: "Get Egh",
  })
  @get()
  static getEgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egh",
  })
  @post("{id}")
  static createEgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
