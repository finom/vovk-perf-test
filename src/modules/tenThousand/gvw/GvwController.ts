import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvw")
export default class GvwController {
  @operation({
    summary: "Get Gvw",
  })
  @get()
  static getGvw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvw",
  })
  @post("{id}")
  static createGvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
