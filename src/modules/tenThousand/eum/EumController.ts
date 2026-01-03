import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eums")
export default class EumController {
  @operation({
    summary: "Get Eums",
  })
  @get()
  static getEums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eum",
  })
  @post("{id}")
  static createEum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
