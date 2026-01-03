import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abds")
export default class AbdController {
  @operation({
    summary: "Get Abds",
  })
  @get()
  static getAbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abd",
  })
  @post("{id}")
  static createAbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
