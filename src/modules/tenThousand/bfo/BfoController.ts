import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfo")
export default class BfoController {
  @operation({
    summary: "Get Bfo",
  })
  @get()
  static getBfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfo",
  })
  @post("{id}")
  static createBfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
