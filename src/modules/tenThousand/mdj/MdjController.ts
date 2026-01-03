import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdjs")
export default class MdjController {
  @operation({
    summary: "Get Mdjs",
  })
  @get()
  static getMdjs = procedure({
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
