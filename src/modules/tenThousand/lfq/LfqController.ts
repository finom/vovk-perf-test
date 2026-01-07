import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfq")
export default class LfqController {
  @operation({
    summary: "Get Lfq",
  })
  @get()
  static getLfq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfq",
  })
  @post("{id}")
  static createLfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
