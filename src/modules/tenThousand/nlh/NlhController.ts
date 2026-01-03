import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlhs")
export default class NlhController {
  @operation({
    summary: "Get Nlhs",
  })
  @get()
  static getNlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlh",
  })
  @post("{id}")
  static createNlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
