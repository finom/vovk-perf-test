import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcies")
export default class LcyController {
  @operation({
    summary: "Get Lcies",
  })
  @get()
  static getLcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcy",
  })
  @post("{id}")
  static createLcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
