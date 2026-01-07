import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ger")
export default class GerController {
  @operation({
    summary: "Get Ger",
  })
  @get()
  static getGer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ger",
  })
  @post("{id}")
  static createGer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
