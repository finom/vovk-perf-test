import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwh")
export default class BwhController {
  @operation({
    summary: "Get Bwh",
  })
  @get()
  static getBwh = procedure({
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
