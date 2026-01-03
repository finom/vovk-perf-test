import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bngs")
export default class BngController {
  @operation({
    summary: "Get Bngs",
  })
  @get()
  static getBngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bng",
  })
  @post("{id}")
  static createBng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
