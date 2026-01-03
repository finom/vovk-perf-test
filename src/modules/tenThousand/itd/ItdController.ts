import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itds")
export default class ItdController {
  @operation({
    summary: "Get Itds",
  })
  @get()
  static getItds = procedure({
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
