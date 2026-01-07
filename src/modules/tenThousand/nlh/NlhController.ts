import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlh")
export default class NlhController {
  @operation({
    summary: "Get Nlh",
  })
  @get()
  static getNlh = procedure({
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
