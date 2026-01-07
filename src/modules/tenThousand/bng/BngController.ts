import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bng")
export default class BngController {
  @operation({
    summary: "Get Bng",
  })
  @get()
  static getBng = procedure({
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
