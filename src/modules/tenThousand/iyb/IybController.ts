import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyb")
export default class IybController {
  @operation({
    summary: "Get Iyb",
  })
  @get()
  static getIyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyb",
  })
  @post("{id}")
  static createIyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
