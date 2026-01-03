import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpes")
export default class GpeController {
  @operation({
    summary: "Get Gpes",
  })
  @get()
  static getGpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpe",
  })
  @post("{id}")
  static createGpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
