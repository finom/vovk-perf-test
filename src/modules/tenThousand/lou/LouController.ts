import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lous")
export default class LouController {
  @operation({
    summary: "Get Lous",
  })
  @get()
  static getLous = procedure({
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
