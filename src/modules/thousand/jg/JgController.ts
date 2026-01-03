import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgs")
export default class JgController {
  @operation({
    summary: "Get Jgs",
  })
  @get()
  static getJgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jg",
  })
  @post("{id}")
  static createJg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
