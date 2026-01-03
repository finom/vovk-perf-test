import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lacs")
export default class LacController {
  @operation({
    summary: "Get Lacs",
  })
  @get()
  static getLacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lac",
  })
  @post("{id}")
  static createLac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
