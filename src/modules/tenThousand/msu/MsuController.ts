import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msus")
export default class MsuController {
  @operation({
    summary: "Get Msus",
  })
  @get()
  static getMsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msu",
  })
  @post("{id}")
  static createMsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
