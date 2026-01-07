import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adk")
export default class AdkController {
  @operation({
    summary: "Get Adk",
  })
  @get()
  static getAdk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adk",
  })
  @post("{id}")
  static createAdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
