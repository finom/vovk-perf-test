import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbq")
export default class FbqController {
  @operation({
    summary: "Get Fbq",
  })
  @get()
  static getFbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbq",
  })
  @post("{id}")
  static createFbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
