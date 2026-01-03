import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cefs")
export default class CefController {
  @operation({
    summary: "Get Cefs",
  })
  @get()
  static getCefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cef",
  })
  @post("{id}")
  static createCef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
