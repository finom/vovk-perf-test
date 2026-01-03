import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edks")
export default class EdkController {
  @operation({
    summary: "Get Edks",
  })
  @get()
  static getEdks = procedure({
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
