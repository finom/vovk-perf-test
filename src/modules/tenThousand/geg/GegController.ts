import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geg")
export default class GegController {
  @operation({
    summary: "Get Geg",
  })
  @get()
  static getGeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geg",
  })
  @post("{id}")
  static createGeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
