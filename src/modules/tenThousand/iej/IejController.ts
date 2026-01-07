import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iej")
export default class IejController {
  @operation({
    summary: "Get Iej",
  })
  @get()
  static getIej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iej",
  })
  @post("{id}")
  static createIej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
