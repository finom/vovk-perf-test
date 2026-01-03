import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdgs")
export default class MdgController {
  @operation({
    summary: "Get Mdgs",
  })
  @get()
  static getMdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdg",
  })
  @post("{id}")
  static createMdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
