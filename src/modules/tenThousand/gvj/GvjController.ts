import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvj")
export default class GvjController {
  @operation({
    summary: "Get Gvj",
  })
  @get()
  static getGvj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvj",
  })
  @post("{id}")
  static createGvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
