import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhies")
export default class LhyController {
  @operation({
    summary: "Get Lhies",
  })
  @get()
  static getLhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhy",
  })
  @post("{id}")
  static createLhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
