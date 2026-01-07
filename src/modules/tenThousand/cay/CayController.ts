import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cay")
export default class CayController {
  @operation({
    summary: "Get Cay",
  })
  @get()
  static getCay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cay",
  })
  @post("{id}")
  static createCay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
