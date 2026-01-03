import { procedure, prefix, get, post, operation } from "vovk";

@prefix("scs")
export default class ScController {
  @operation({
    summary: "Get Scs",
  })
  @get()
  static getScs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sc",
  })
  @post("{id}")
  static createSc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
