import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acs")
export default class AcsController {
  @operation({
    summary: "Get Acs",
  })
  @get()
  static getAcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acs",
  })
  @post("{id}")
  static createAcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
