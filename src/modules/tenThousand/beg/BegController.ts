import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beg")
export default class BegController {
  @operation({
    summary: "Get Beg",
  })
  @get()
  static getBeg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beg",
  })
  @post("{id}")
  static createBeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
