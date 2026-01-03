import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwhs")
export default class BwhController {
  @operation({
    summary: "Get Bwhs",
  })
  @get()
  static getBwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwh",
  })
  @post("{id}")
  static createBwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
