import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbrs")
export default class FbrController {
  @operation({
    summary: "Get Fbrs",
  })
  @get()
  static getFbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbr",
  })
  @post("{id}")
  static createFbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
