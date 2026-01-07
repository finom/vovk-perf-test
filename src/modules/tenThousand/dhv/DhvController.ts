import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhv")
export default class DhvController {
  @operation({
    summary: "Get Dhv",
  })
  @get()
  static getDhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhv",
  })
  @post("{id}")
  static createDhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
