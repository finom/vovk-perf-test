import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lovs")
export default class LovController {
  @operation({
    summary: "Get Lovs",
  })
  @get()
  static getLovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lov",
  })
  @post("{id}")
  static createLov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
