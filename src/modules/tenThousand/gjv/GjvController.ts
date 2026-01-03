import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjvs")
export default class GjvController {
  @operation({
    summary: "Get Gjvs",
  })
  @get()
  static getGjvs = procedure({
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
