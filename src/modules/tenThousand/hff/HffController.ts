import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hff")
export default class HffController {
  @operation({
    summary: "Get Hff",
  })
  @get()
  static getHff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hff",
  })
  @post("{id}")
  static createHff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
