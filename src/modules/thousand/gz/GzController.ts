import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gz")
export default class GzController {
  @operation({
    summary: "Get Gz",
  })
  @get()
  static getGz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gz",
  })
  @post("{id}")
  static createGz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
