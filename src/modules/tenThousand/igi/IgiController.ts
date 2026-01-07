import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igi")
export default class IgiController {
  @operation({
    summary: "Get Igi",
  })
  @get()
  static getIgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igi",
  })
  @post("{id}")
  static createIgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
