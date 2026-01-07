import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngh")
export default class NghController {
  @operation({
    summary: "Get Ngh",
  })
  @get()
  static getNgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngh",
  })
  @post("{id}")
  static createNgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
