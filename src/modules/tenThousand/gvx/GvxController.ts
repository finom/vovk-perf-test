import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvx")
export default class GvxController {
  @operation({
    summary: "Get Gvx",
  })
  @get()
  static getGvx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvx",
  })
  @post("{id}")
  static createGvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
