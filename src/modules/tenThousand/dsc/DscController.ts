import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsc")
export default class DscController {
  @operation({
    summary: "Get Dsc",
  })
  @get()
  static getDsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsc",
  })
  @post("{id}")
  static createDsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
