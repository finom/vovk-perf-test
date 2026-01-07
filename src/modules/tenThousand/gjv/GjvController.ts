import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjv")
export default class GjvController {
  @operation({
    summary: "Get Gjv",
  })
  @get()
  static getGjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjv",
  })
  @post("{id}")
  static createGjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
