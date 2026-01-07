import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbv")
export default class MbvController {
  @operation({
    summary: "Get Mbv",
  })
  @get()
  static getMbv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbv",
  })
  @post("{id}")
  static createMbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
