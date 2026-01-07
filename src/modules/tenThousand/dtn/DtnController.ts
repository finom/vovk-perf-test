import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtn")
export default class DtnController {
  @operation({
    summary: "Get Dtn",
  })
  @get()
  static getDtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtn",
  })
  @post("{id}")
  static createDtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
