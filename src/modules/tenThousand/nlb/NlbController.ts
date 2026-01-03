import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlbs")
export default class NlbController {
  @operation({
    summary: "Get Nlbs",
  })
  @get()
  static getNlbs = procedure({
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
