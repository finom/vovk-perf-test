import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahns")
export default class AhnController {
  @operation({
    summary: "Get Ahns",
  })
  @get()
  static getAhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahn",
  })
  @post("{id}")
  static createAhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
