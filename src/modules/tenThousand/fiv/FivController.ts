import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fivs")
export default class FivController {
  @operation({
    summary: "Get Fivs",
  })
  @get()
  static getFivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiv",
  })
  @post("{id}")
  static createFiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
