import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byds")
export default class BydController {
  @operation({
    summary: "Get Byds",
  })
  @get()
  static getByds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byd",
  })
  @post("{id}")
  static createByd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
