import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghn")
export default class GhnController {
  @operation({
    summary: "Get Ghn",
  })
  @get()
  static getGhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghn",
  })
  @post("{id}")
  static createGhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
