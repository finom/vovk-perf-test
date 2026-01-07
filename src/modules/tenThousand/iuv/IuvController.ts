import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuv")
export default class IuvController {
  @operation({
    summary: "Get Iuv",
  })
  @get()
  static getIuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuv",
  })
  @post("{id}")
  static createIuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
