import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acy")
export default class AcyController {
  @operation({
    summary: "Get Acy",
  })
  @get()
  static getAcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acy",
  })
  @post("{id}")
  static createAcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
