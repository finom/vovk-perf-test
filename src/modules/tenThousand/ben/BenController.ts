import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ben")
export default class BenController {
  @operation({
    summary: "Get Ben",
  })
  @get()
  static getBen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ben",
  })
  @post("{id}")
  static createBen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
