import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvn")
export default class GvnController {
  @operation({
    summary: "Get Gvn",
  })
  @get()
  static getGvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvn",
  })
  @post("{id}")
  static createGvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
