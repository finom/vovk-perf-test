import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwb")
export default class BwbController {
  @operation({
    summary: "Get Bwb",
  })
  @get()
  static getBwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwb",
  })
  @post("{id}")
  static createBwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
