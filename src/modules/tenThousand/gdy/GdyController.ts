import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdy")
export default class GdyController {
  @operation({
    summary: "Get Gdy",
  })
  @get()
  static getGdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdy",
  })
  @post("{id}")
  static createGdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
