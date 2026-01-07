import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwn")
export default class FwnController {
  @operation({
    summary: "Get Fwn",
  })
  @get()
  static getFwn = procedure({
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
