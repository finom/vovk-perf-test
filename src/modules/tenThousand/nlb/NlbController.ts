import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlb")
export default class NlbController {
  @operation({
    summary: "Get Nlb",
  })
  @get()
  static getNlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlb",
  })
  @post("{id}")
  static createNlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
