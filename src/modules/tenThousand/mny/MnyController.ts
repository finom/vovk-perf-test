import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnies")
export default class MnyController {
  @operation({
    summary: "Get Mnies",
  })
  @get()
  static getMnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mny",
  })
  @post("{id}")
  static createMny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
