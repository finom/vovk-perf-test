import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwns")
export default class FwnController {
  @operation({
    summary: "Get Fwns",
  })
  @get()
  static getFwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwn",
  })
  @post("{id}")
  static createFwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
