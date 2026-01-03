import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdvs")
export default class MdvController {
  @operation({
    summary: "Get Mdvs",
  })
  @get()
  static getMdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdv",
  })
  @post("{id}")
  static createMdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
