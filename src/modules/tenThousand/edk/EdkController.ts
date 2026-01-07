import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edk")
export default class EdkController {
  @operation({
    summary: "Get Edk",
  })
  @get()
  static getEdk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edk",
  })
  @post("{id}")
  static createEdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
