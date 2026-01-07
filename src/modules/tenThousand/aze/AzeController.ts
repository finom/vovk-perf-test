import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aze")
export default class AzeController {
  @operation({
    summary: "Get Aze",
  })
  @get()
  static getAze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aze",
  })
  @post("{id}")
  static createAze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
