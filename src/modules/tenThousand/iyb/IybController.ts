import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iybs")
export default class IybController {
  @operation({
    summary: "Get Iybs",
  })
  @get()
  static getIybs = procedure({
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
