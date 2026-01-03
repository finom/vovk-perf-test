import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akes")
export default class AkeController {
  @operation({
    summary: "Get Akes",
  })
  @get()
  static getAkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ake",
  })
  @post("{id}")
  static createAke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
