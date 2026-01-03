import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrls")
export default class LrlController {
  @operation({
    summary: "Get Lrls",
  })
  @get()
  static getLrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrl",
  })
  @post("{id}")
  static createLrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
