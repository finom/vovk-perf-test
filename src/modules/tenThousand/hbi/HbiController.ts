import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbi")
export default class HbiController {
  @operation({
    summary: "Get Hbi",
  })
  @get()
  static getHbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbi",
  })
  @post("{id}")
  static createHbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
