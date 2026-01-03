import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aabs")
export default class AabController {
  @operation({
    summary: "Get Aabs",
  })
  @get()
  static getAabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aab",
  })
  @post("{id}")
  static createAab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
