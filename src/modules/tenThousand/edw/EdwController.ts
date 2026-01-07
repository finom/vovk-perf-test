import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edw")
export default class EdwController {
  @operation({
    summary: "Get Edw",
  })
  @get()
  static getEdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edw",
  })
  @post("{id}")
  static createEdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
