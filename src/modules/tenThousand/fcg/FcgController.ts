import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcgs")
export default class FcgController {
  @operation({
    summary: "Get Fcgs",
  })
  @get()
  static getFcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcg",
  })
  @post("{id}")
  static createFcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
