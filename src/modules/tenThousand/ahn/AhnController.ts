import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahn")
export default class AhnController {
  @operation({
    summary: "Get Ahn",
  })
  @get()
  static getAhn = procedure({
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
