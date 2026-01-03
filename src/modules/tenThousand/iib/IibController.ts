import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iibs")
export default class IibController {
  @operation({
    summary: "Get Iibs",
  })
  @get()
  static getIibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iib",
  })
  @post("{id}")
  static createIib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
