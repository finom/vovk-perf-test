import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cties")
export default class CtyController {
  @operation({
    summary: "Get Cties",
  })
  @get()
  static getCties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cty",
  })
  @post("{id}")
  static createCty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
