import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcg")
export default class FcgController {
  @operation({
    summary: "Get Fcg",
  })
  @get()
  static getFcg = procedure({
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
