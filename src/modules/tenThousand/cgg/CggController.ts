import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cggs")
export default class CggController {
  @operation({
    summary: "Get Cggs",
  })
  @get()
  static getCggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgg",
  })
  @post("{id}")
  static createCgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
