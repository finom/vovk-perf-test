import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gve")
export default class GveController {
  @operation({
    summary: "Get Gve",
  })
  @get()
  static getGve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gve",
  })
  @post("{id}")
  static createGve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
