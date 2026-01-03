import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlbs")
export default class MlbController {
  @operation({
    summary: "Get Mlbs",
  })
  @get()
  static getMlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlb",
  })
  @post("{id}")
  static createMlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
