import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihfs")
export default class IhfController {
  @operation({
    summary: "Get Ihfs",
  })
  @get()
  static getIhfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihf",
  })
  @post("{id}")
  static createIhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
