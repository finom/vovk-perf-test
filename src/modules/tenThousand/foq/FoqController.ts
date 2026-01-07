import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foq")
export default class FoqController {
  @operation({
    summary: "Get Foq",
  })
  @get()
  static getFoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foq",
  })
  @post("{id}")
  static createFoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
