import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpds")
export default class FpdController {
  @operation({
    summary: "Get Fpds",
  })
  @get()
  static getFpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpd",
  })
  @post("{id}")
  static createFpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
