import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itd")
export default class ItdController {
  @operation({
    summary: "Get Itd",
  })
  @get()
  static getItd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itd",
  })
  @post("{id}")
  static createItd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
