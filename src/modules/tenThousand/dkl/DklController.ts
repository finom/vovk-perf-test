import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkls")
export default class DklController {
  @operation({
    summary: "Get Dkls",
  })
  @get()
  static getDkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkl",
  })
  @post("{id}")
  static createDkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
