import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrk")
export default class LrkController {
  @operation({
    summary: "Get Lrk",
  })
  @get()
  static getLrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrk",
  })
  @post("{id}")
  static createLrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
