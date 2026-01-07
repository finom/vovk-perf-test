import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdj")
export default class MdjController {
  @operation({
    summary: "Get Mdj",
  })
  @get()
  static getMdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdj",
  })
  @post("{id}")
  static createMdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
