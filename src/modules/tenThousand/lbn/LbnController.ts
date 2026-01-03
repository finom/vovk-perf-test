import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbns")
export default class LbnController {
  @operation({
    summary: "Get Lbns",
  })
  @get()
  static getLbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbn",
  })
  @post("{id}")
  static createLbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
