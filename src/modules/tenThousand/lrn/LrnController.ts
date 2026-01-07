import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrn")
export default class LrnController {
  @operation({
    summary: "Get Lrn",
  })
  @get()
  static getLrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrn",
  })
  @post("{id}")
  static createLrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
