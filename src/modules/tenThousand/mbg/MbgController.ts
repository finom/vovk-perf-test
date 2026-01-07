import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbg")
export default class MbgController {
  @operation({
    summary: "Get Mbg",
  })
  @get()
  static getMbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbg",
  })
  @post("{id}")
  static createMbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
