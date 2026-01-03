import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abgs")
export default class AbgController {
  @operation({
    summary: "Get Abgs",
  })
  @get()
  static getAbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abg",
  })
  @post("{id}")
  static createAbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
