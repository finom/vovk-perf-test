import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvcs")
export default class GvcController {
  @operation({
    summary: "Get Gvcs",
  })
  @get()
  static getGvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvc",
  })
  @post("{id}")
  static createGvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
