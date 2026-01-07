import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brj")
export default class BrjController {
  @operation({
    summary: "Get Brj",
  })
  @get()
  static getBrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brj",
  })
  @post("{id}")
  static createBrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
