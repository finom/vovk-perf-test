import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loys")
export default class LoyController {
  @operation({
    summary: "Get Loys",
  })
  @get()
  static getLoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loy",
  })
  @post("{id}")
  static createLoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
