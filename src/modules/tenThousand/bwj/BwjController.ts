import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwj")
export default class BwjController {
  @operation({
    summary: "Get Bwj",
  })
  @get()
  static getBwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwj",
  })
  @post("{id}")
  static createBwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
