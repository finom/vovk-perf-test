import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foj")
export default class FojController {
  @operation({
    summary: "Get Foj",
  })
  @get()
  static getFoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foj",
  })
  @post("{id}")
  static createFoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
