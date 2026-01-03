import { procedure, prefix, get, post, operation } from "vovk";

@prefix("docs")
export default class DocController {
  @operation({
    summary: "Get Docs",
  })
  @get()
  static getDocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doc",
  })
  @post("{id}")
  static createDoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
