import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lou")
export default class LouController {
  @operation({
    summary: "Get Lou",
  })
  @get()
  static getLou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lou",
  })
  @post("{id}")
  static createLou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
