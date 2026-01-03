import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjgs")
export default class GjgController {
  @operation({
    summary: "Get Gjgs",
  })
  @get()
  static getGjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjg",
  })
  @post("{id}")
  static createGjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
