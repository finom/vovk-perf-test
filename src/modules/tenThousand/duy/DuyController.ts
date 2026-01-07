import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duy")
export default class DuyController {
  @operation({
    summary: "Get Duy",
  })
  @get()
  static getDuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duy",
  })
  @post("{id}")
  static createDuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
