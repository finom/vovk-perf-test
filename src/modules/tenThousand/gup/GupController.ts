import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gup")
export default class GupController {
  @operation({
    summary: "Get Gup",
  })
  @get()
  static getGup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gup",
  })
  @post("{id}")
  static createGup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
